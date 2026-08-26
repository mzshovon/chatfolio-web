"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import styles from "./ContactModal.module.css";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleClose = () => {
    setSent(false);
    setEmail("");
    setMessage("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your backend / email provider.
    setSent(true);
  };

  return (
    <div className={styles.overlay} onClick={handleClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Contact sales"
        onClick={(e) => e.stopPropagation()}
      >
        {sent ? (
          <>
            <div className={styles.title}>Thanks — we&apos;ll be in touch</div>
            <p className={styles.desc}>We&apos;ll reply to your email shortly.</p>
            <button type="button" className="btn btn-primary" style={{ width: "100%", marginTop: 20 }} onClick={handleClose}>
              Close
            </button>
          </>
        ) : (
          <form onSubmit={handleSend}>
            <div className={styles.header}>
              <div className={styles.title}>Contact sales</div>
              <button type="button" className={styles.closeIcon} onClick={handleClose} aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <p className={styles.desc}>We&apos;ll get back to you within a day.</p>
            <div className={styles.fields}>
              <input
                type="email"
                required
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <textarea
                rows={4}
                placeholder="What are you looking for?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Send message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
