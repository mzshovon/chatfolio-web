"use client";

import { useState } from "react";
import styles from "./Pricing.module.css";
import { PURCHASE_URL, SIGN_UP_URL } from "@/lib/urls";

type Currency = "BDT" | "USD";

const PRICES: Record<Currency, { free: string; pro: string }> = {
  BDT: { free: "৳0", pro: "৳1,320" },
  USD: { free: "$0", pro: "$12" },
};

type PricingProps = {
  onContactSales: () => void;
};

export default function Pricing({ onContactSales }: PricingProps) {
  const [currency, setCurrency] = useState<Currency>("BDT");
  const prices = PRICES[currency];

  return (
    <section id="pricing" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Simple pricing</h2>
      <p className={styles.subtitle}>Start free. Upgrade when you&apos;re ready to publish.</p>

      <div className={styles.toggleRow}>
        <div className={styles.toggle}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${currency === "BDT" ? styles.toggleBtnActive : ""}`}
            onClick={() => setCurrency("BDT")}
          >
            ৳ BDT
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${currency === "USD" ? styles.toggleBtnActive : ""}`}
            onClick={() => setCurrency("USD")}
          >
            $ USD
          </button>
        </div>
      </div>

      <div className={styles.plans}>
        <div className={styles.plan}>
          <div className={styles.planName}>Free</div>
          <div className={styles.planPrice}>{prices.free}</div>
          <div className={styles.planDesc}>1 chatfolio, draft only</div>
          <a href={SIGN_UP_URL} className="btn btn-outline" style={{ marginTop: 20, width: "100%" }}>
            Start free
          </a>
        </div>

        <div className={`${styles.plan} ${styles.planFeatured}`}>
          <div className={styles.planNameFeatured}>Pro</div>
          <div className={styles.planPrice}>
            {prices.pro}
            <span className={styles.planPeriod}>/mo</span>
          </div>
          <div className={styles.planDesc}>Publish, custom slug, full chat history</div>
          <a href={PURCHASE_URL} className="btn btn-primary" style={{ marginTop: 20, width: "100%" }}>
            Get started
          </a>
        </div>

        <div className={styles.plan}>
          <div className={styles.planName}>Teams</div>
          <div className={styles.planPrice}>Custom</div>
          <div className={styles.planDesc}>Admin CMS, roles &amp; permissions, moderation</div>
          <button
            type="button"
            className="btn btn-outline"
            style={{ marginTop: 20, width: "100%" }}
            onClick={onContactSales}
          >
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
}
