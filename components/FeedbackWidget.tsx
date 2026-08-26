"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquareHeart, X, Send, Star } from "lucide-react";
import styles from "./FeedbackWidget.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const MAX_MESSAGE_LENGTH = 1000;

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const reset = () => {
    setRating(null);
    setMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && rating === null) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          message: message.trim().slice(0, MAX_MESSAGE_LENGTH),
          path: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.panel} ref={panelRef} role="dialog" aria-label="Send feedback">
          <div className={styles.panelHeader}>
            <span>Share feedback</span>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setOpen(false)}
              aria-label="Close feedback"
            >
              <X size={16} />
            </button>
          </div>

          {status === "sent" ? (
            <div className={styles.thanks}>
              <p>Thanks — your feedback helps us improve Chatfolio.</p>
              <button
                type="button"
                className="btn btn-outline"
                style={{ width: "100%" }}
                onClick={() => {
                  reset();
                  setOpen(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <p className={styles.prompt}>How&apos;s your experience so far?</p>
              <div className={styles.stars} role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={rating === n}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    className={styles.starBtn}
                    onClick={() => setRating(n)}
                  >
                    <Star
                      size={22}
                      fill={rating !== null && n <= rating ? "currentColor" : "none"}
                      className={rating !== null && n <= rating ? styles.starActive : styles.star}
                    />
                  </button>
                ))}
              </div>
              <textarea
                className={styles.textarea}
                placeholder="Tell us what's working or what's not..."
                rows={3}
                maxLength={MAX_MESSAGE_LENGTH}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {status === "error" && (
                <p className={styles.errorText}>Couldn&apos;t send feedback. Please try again.</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
                disabled={status === "sending" || (!message.trim() && rating === null)}
              >
                <Send size={15} />
                {status === "sending" ? "Sending…" : "Send feedback"}
              </button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close feedback widget" : "Open feedback widget"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <MessageSquareHeart size={22} />}
      </button>
    </div>
  );
}
