"use client";

import { useState, useRef } from "react";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

/** Contact section — heading, sub-copy, and inline contact form. */
export default function ContactCtaSection() {
  const t = useTranslation();
  const ref = useReveal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);
  const [dsgvoError, setDsgvoError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const lastSubmitRef = useRef<number>(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(t.contact.form.errorRequired);
      return;
    }

    if (name.trim().length < 2 || !/\p{L}/u.test(name)) {
      setErrorMsg(t.contact.form.errorName);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg(t.contact.form.errorEmail);
      return;
    }

    if (message.trim().length < 20) {
      setErrorMsg(t.contact.form.errorTooShort);
      return;
    }

    if (!dsgvoAccepted) {
      setDsgvoError(true);
      setErrorMsg(t.contact.form.errorDsgvo);
      return;
    }
    setDsgvoError(false);

    if (Date.now() - lastSubmitRef.current < 5000) return;
    lastSubmitRef.current = Date.now();
    setStatus("loading");
    try {
      const res = await fetch("/mail/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _hp: honeypot,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setStatus("error");
        setErrorMsg(t.contact.form.errorServer);
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setHoneypot("");
      setDsgvoAccepted(false);
    } catch {
      setStatus("error");
      setErrorMsg(t.contact.form.errorServer);
    }
  }

  const inputClass =
    "w-full rounded-md bg-white/5 border border-accent/20 px-4 py-3 text-base text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors";

  return (
    <section id="contact" aria-label="Contact" className="relative bg-primary overflow-hidden cyber-scanline fade-to-surface" style={{ scrollMarginTop: "80px" }}>
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
      />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          <div ref={ref} className="reveal grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

            {/* Left: eyebrow + heading + sub */}
            <div>
              <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
                {t.contact.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                {t.contact.heading}
              </h2>
              <p className="mt-4 text-base text-secondary/50 leading-relaxed">
                {t.contact.sub}
              </p>
            </div>

            {/* Right: contact form */}
            <div>
              {status === "success" ? (
                <p role="status" className="text-accent text-base font-medium py-4">
                  {t.contact.form.success}
                </p>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  {/* Honeypot — hidden from real users, bots will fill it */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-secondary/60 mb-1.5">
                      {t.contact.form.labelName}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={100}
                      required
                      placeholder={t.contact.form.placeholderName}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-secondary/60 mb-1.5">
                      {t.contact.form.labelEmail}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={254}
                      required
                      placeholder={t.contact.form.placeholderEmail}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-secondary/60 mb-1.5">
                      {t.contact.form.labelMessage}
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                      rows={4}
                      required
                      placeholder={t.contact.form.placeholderMessage}
                      className={`${inputClass} resize-none`}
                    />
                    <p className="text-xs text-secondary/30 mt-1 text-right">{message.length}/500</p>
                  </div>

                  {/* DSGVO consent + submit — grouped as one action unit */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="contact-dsgvo"
                        type="checkbox"
                        checked={dsgvoAccepted}
                        onChange={(e) => { setDsgvoAccepted(e.target.checked); if (e.target.checked) setDsgvoError(false); }}
                        className={`mt-1 h-4 w-4 shrink-0 rounded cursor-pointer accent-accent transition-colors ${
                          dsgvoError
                            ? "border-2 border-red-400 bg-red-400/10"
                            : "border border-accent/30 bg-white/5"
                        }`}
                      />
                      <label htmlFor="contact-dsgvo" className="text-sm text-secondary/50 leading-relaxed cursor-pointer">
                        {t.contact.form.dsgvoText}
                        <a href="/datenschutz" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                          {t.contact.form.dsgvoLinkText}
                        </a>
                        {t.contact.form.dsgvoTextEnd}
                      </label>
                    </div>

                    {errorMsg && (
                      <p role="alert" className="text-sm text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-cyber inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none select-none"
                    >
                      {status === "loading" ? t.contact.form.sending : t.contact.cta1}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
