<?php
$config = require __DIR__ . '/config.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} elseif (empty($config['allowed_origins'])) {
    header('Access-Control-Allow-Origin: *');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON body']);
    exit;
}

// Honeypot — bots fill this, humans never will
if (!empty($data['_hp'])) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    exit;
}

// Sanitize
$name    = trim(strip_tags($data['name']    ?? ''));
$email   = trim(filter_var($data['email']   ?? '', FILTER_SANITIZE_EMAIL));
$message = trim(strip_tags($data['message'] ?? ''));

// Validate
$errors = [];
if (strlen($name) < 2)                          $errors[] = 'name too short';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'invalid email';
if (strlen($message) < 20)                      $errors[] = 'message too short';
if (strlen($message) > 500)                     $errors[] = 'message too long';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Build email
$subject  = "=?UTF-8?B?" . base64_encode("Neue Projektanfrage von {$name}") . "?=";
$body     = "Neue Projektanfrage\n" . str_repeat('-', 50) . "\n\n";
$body    .= "Name:   {$name}\n";
$body    .= "E-Mail: {$email}\n\n";
$body    .= "Nachricht:\n{$message}\n";

$headers  = "From: {$config['from_name']} <{$config['from_email']}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = mail($config['to_email'], $subject, base64_encode($body), $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'mail() failed']);
}
