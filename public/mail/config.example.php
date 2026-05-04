<?php
return [
    // Recipient — where contact form submissions land
    'to_email'    => 'your@email.com',

    // Sender — must be a real mailbox on this server's domain
    'from_email'  => 'info@yourdomain.com',
    'from_name'   => 'Your Site Name',

    // CORS — list every origin allowed to call this endpoint
    // Leave empty [] only for local dev — never in production
    'allowed_origins' => [
        'https://www.yourdomain.com',
        'https://yourdomain.com',
    ],
];
