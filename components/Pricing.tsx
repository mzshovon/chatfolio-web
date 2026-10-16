"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { PURCHASE_URL, SIGN_UP_URL } from "@/lib/urls";

type Currency = "BDT" | "USD";

const PRICES: Record<Currency, { free: string; premium: string }> = {
  BDT: { free: "৳0", premium: "৳499" },
  USD: { free: "$0", premium: "$5" },
};

const FREE_CHATS_PER_DAY = 20;

const FREE_FEATURES = [
  "1 chatfolio link (yourname.chatfolio.chat)",
  "AI profile built from your CV",
  `${FREE_CHATS_PER_DAY} recruiter chats a day`,
  "Last 7 days of chat history",
];

const PREMIUM_FEATURES = [
  "Up to 5 chatfolio links and custom domains",
  "Unlimited recruiter chats and AI answers",
  "Recruiter insights: who asked, what, and from where",
  "Calendar booking for Google Meet and calls",
  "Full chat history, no badge",
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("BDT");
  const prices = PRICES[currency];

  return (
    <section id="pricing" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <div>
          <div className="eyebrow">Pricing</div>
          <h2 className={styles.title}>Start free. Go Premium when recruiters start asking.</h2>
        </div>
        <div className="segmented" role="group" aria-label="Currency">
          {(["BDT", "USD"] as const).map((c) => (
            <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)}>
              {c === "BDT" ? "৳ BDT" : "$ USD"}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.plans}>
        <div className={`${styles.plan} ${styles.free}`}>
          <div className={styles.planName}>Free</div>
          <div className={styles.priceRow}>
            <span className={styles.price}>{prices.free}</span>
            <span className={styles.period}>forever</span>
          </div>
          <div className={styles.planDesc}>Try Chatfolio and get your link out.</div>
          <ul className={styles.features}>
            {FREE_FEATURES.map((f) => (
              <li key={f}><span className={styles.tick}>✓</span>{f}</li>
            ))}
            <li className={styles.muted}><span>–</span>&ldquo;Powered by Chatfolio&rdquo; badge shown</li>
          </ul>
          <a href={SIGN_UP_URL} className={`btn ${styles.outlineBtn}`}>Start free</a>
        </div>

        <div className={`${styles.plan} ${styles.premium}`}>
          <div className={styles.premiumHead}>
            <div className={styles.planName}>Premium</div>
            <span className={styles.badge}>MOST POPULAR</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.price}>{prices.premium}</span>
            <span className={styles.period}>/ month</span>
          </div>
          <div className={styles.planDesc}>For active job seekers who want every lead.</div>
          <ul className={styles.features}>
            {PREMIUM_FEATURES.map((f) => (
              <li key={f}><span className={styles.tick}>✓</span>{f}</li>
            ))}
          </ul>
          <a href={PURCHASE_URL} className="btn btn-primary">Go Premium</a>
        </div>
      </div>

      <p className={styles.note}>Recruiters chat and search for free. Cancel Premium anytime.</p>
    </section>
  );
}
