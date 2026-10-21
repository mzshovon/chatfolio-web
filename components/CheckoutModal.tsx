"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./CheckoutModal.module.css";
import { ACTIVATE_URL, PREMIUM_CHECKOUT_URL, SIGN_IN_URL, SIGN_UP_URL } from "@/lib/urls";

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
  /** Display price, e.g. "৳500". Checkout is BDT (bKash, Nagad, cards). */
  price: string;
};

const STEP_LABELS = ["Sign in", "Pay", "Copy key", "Activate", "Done"];
const LAST = STEP_LABELS.length;
const ACTIVATE_LABEL = ACTIVATE_URL.replace(/^https?:\/\//, "");

// The dialog only mounts while open, so its step resets to 1 on every open.
export default function CheckoutModal({ open, onClose, price }: CheckoutModalProps) {
  if (!open) return null;
  return <CheckoutDialog onClose={onClose} price={price} />;
}

function CheckoutDialog({ onClose, price }: Omit<CheckoutModalProps, "open">) {
  const [step, setStep] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const go = (n: number) => setStep(Math.min(LAST, Math.max(1, n)));

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>PREMIUM · {price} / 6 MONTHS</div>
            <h3 id="checkout-title" className={styles.title}>How upgrading works</h3>
          </div>
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <p className={styles.lead}>
          Payment is handled by our partner Support Kori. Five quick steps from free to Premium.
        </p>

        <div className={styles.tabs}>
          {STEP_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-label={`Step ${i + 1}: ${label}`}
              className={`${styles.tab} ${i + 1 <= step ? styles.tabOn : ""}`}
              onClick={() => go(i + 1)}
            />
          ))}
        </div>
        <div className={styles.stepNum}>STEP {step} OF {LAST}</div>

        {step === 1 && (
          <>
            <h4 className={styles.stepTitle}>Sign in or create your free account</h4>
            <p className={styles.p}>
              Your Premium license is linked to the email on your Chatfolio account. Note it down;
              you&apos;ll use the same one at checkout.
            </p>
            <div className={styles.row}>
              <a href={SIGN_IN_URL} className={`btn ${styles.dark}`}>Sign in</a>
              <a href={SIGN_UP_URL} className={`btn ${styles.outline}`}>Create one free</a>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h4 className={styles.stepTitle}>Pay on Support Kori</h4>
            <p className={styles.p}>
              Click <b>Continue to checkout</b>. Enter the same email, pick bKash, Nagad or card, and pay {price}.
            </p>
            <div className={styles.panel}>
              <div className={styles.panelTop}>
                <div>
                  <div className={styles.panelLabel}>CHATFOLIO PREMIUM</div>
                  <div className={styles.panelPrice}>
                    {price}<span> / 6 months</span>
                  </div>
                </div>
                <div className={styles.panelNote}>Opens in a new tab</div>
              </div>
              <a href={PREMIUM_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={styles.panelBtn}>
                Open Support Kori checkout ↗
              </a>
              <div className={styles.panelNote}>
                Keep this popup open. When payment is done, come back here and click Next.
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h4 className={styles.stepTitle}>Copy your license key</h4>
            <p className={styles.p}>
              After payment you&apos;ll see a &ldquo;Thank you&rdquo; page. Click <b>Copy</b> next to your license
              key. It&apos;s also emailed to you and saved in your Support Kori library.
            </p>
            <div className={styles.mock} aria-label="Example of the Support Kori thank-you page">
              <div className={styles.mockDone}>
                <div className={styles.mockTick}>✓</div>
                <div className={styles.mockSmall}>ORDER COMPLETE</div>
                <div className={styles.mockBig}>Thank you</div>
              </div>
              <div className={`${styles.mockCard} ${styles.mockKey}`}>
                <span className={styles.mockBadge}>COPY THIS</span>
                <div className={styles.mockSmall}>YOUR LICENSE KEY</div>
                <div className={styles.mockKeyRow}>
                  <div className={styles.mockKeyBox}>SK-7F3A-92QD-LX8M</div>
                  <div className={styles.mockCopy}>⧉ Copy</div>
                </div>
              </div>
              <div className={styles.example}>Example only</div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h4 className={styles.stepTitle}>Activate in Chatfolio</h4>
            <p className={styles.p}>
              Click <b>Download now</b> on the Thank you page, or open <b>{ACTIVATE_LABEL}</b>. Paste your key and
              click Activate.
            </p>
            <div className={styles.activate}>
              <div className={styles.panelLabelDark}>LICENSE KEY</div>
              <div className={styles.activateRow}>
                <div className={styles.activateKey}>SK-7F3A-92QD-LX8M</div>
                <div className={styles.activateBtn}>Activate</div>
              </div>
              <div className={styles.hint}>Signed in with the same email you paid with</div>
              <div className={styles.example}>Example only</div>
            </div>
            <a href={ACTIVATE_URL} className={styles.inline}>Open the activation page →</a>
          </>
        )}

        {step === 5 && (
          <>
            <h4 className={styles.stepTitle}>You&apos;re on Premium</h4>
            <p className={styles.p}>
              Your dashboard unlocks right away. No need to sign out or re-upload your CV.
            </p>
            <div className={styles.panel}>
              <div className={styles.doneHead}>
                <span className={styles.doneTick}>✓</span>
                <span>Premium active</span>
              </div>
              <ul className={styles.doneList}>
                <li>Up to 5 chatfolio links and custom domains</li>
                <li>Unlimited recruiter chats and recruiter insights</li>
                <li>Calendar booking, full history, no badge</li>
              </ul>
            </div>
            <div className={styles.hint}>
              Key not working or lost it? <Link href="/#contact" onClick={onClose} className={styles.bold}>Contact us</Link>
            </div>
          </>
        )}

        <div className={styles.nav}>
          {step > 1 && (
            <button type="button" className={`btn ${styles.outline}`} onClick={() => go(step - 1)}>
              Back
            </button>
          )}
          {step < LAST ? (
            <button type="button" className={`btn ${styles.dark} ${styles.grow}`} onClick={() => go(step + 1)}>
              Next
            </button>
          ) : (
            <a
              href={PREMIUM_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.grow}`}
            >
              Continue to checkout
            </a>
          )}
        </div>
        <div className={styles.foot}>
          <a href={PREMIUM_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={styles.bold}>
            Skip to checkout
          </a>
          <span>
            Have a key? <a href={ACTIVATE_URL} className={styles.bold}>Activate now</a>
          </span>
        </div>
      </div>
    </div>
  );
}
