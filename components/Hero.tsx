"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import DemoModal from "./DemoModal";
import styles from "./Hero.module.css";
import { SIGN_UP_URL } from "@/lib/urls";

const DEMO_VIDEO_ID = "aqz-KE-bpKQ";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="chip">AI-powered portfolios</span>
          <h1 className={styles.headline}>
            Your portfolio, <em>answering</em> recruiters while you sleep
          </h1>
          <p className={styles.sub}>
            Chatfolio turns your CV into an AI that talks like you — so recruiters get
            real answers about your work, instantly, any hour.
          </p>
          <div className={styles.ctaRow}>
            <a href={SIGN_UP_URL} className="btn btn-primary">
              Build your chatfolio
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setDemoOpen(true)}
            >
              <PlayCircle size={18} />
              See a live example
            </button>
          </div>
          <p className={styles.microcopy}>Free to start · No credit card required</p>
        </div>

        <div className={styles.chatCard}>
          <div className={styles.chatHeader}>
            <div className={styles.avatar}>AL</div>
            <span>Ada Lovelace&apos;s chatfolio</span>
          </div>
          <div className={styles.messages}>
            <div className={styles.bubbleUser}>
              What&apos;s your experience with distributed systems?
            </div>
            <div className={styles.bubbleBot}>
              I led the platform team at Acme, building a payments ledger handling
              millions of transactions a day across distributed services.
            </div>
            <div className={styles.bubbleUser}>Open to remote roles?</div>
            <div className={styles.bubbleBot}>
              Yes — remote or hybrid, based in Dhaka or fully remote internationally.
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} videoId={DEMO_VIDEO_ID} />
    </section>
  );
}
