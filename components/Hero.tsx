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
            Turn your CV into an AI portfolio that answers recruiter questions about your experience, skills, projects, and availability — even when you&apos;re offline.
          </p>
          <p className={styles.sub}>
            Upload your CV. Review your profile. Publish your Chatfolio. Let recruiters start the conversation.
          </p>
          <div className={styles.ctaRow}>
            <a href={SIGN_UP_URL} className="btn btn-primary">
              Create my Chatfolio - Free
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setDemoOpen(true)}
            >
              <PlayCircle size={18} />
              See how it works
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
            <div className={`${styles.messageGroup} ${styles.messageGroupUser}`}>
              <span className={styles.messageLabel}>Recruiter</span>
              <div className={styles.bubbleUser}>
                What&apos;s your experience with distributed systems?
              </div>
            </div>
            <div className={`${styles.messageGroup} ${styles.messageGroupBot}`}>
              <span className={styles.messageLabel}>Chatfolio</span>
              <div className={styles.bubbleBot}>
                I led the platform team at Acme, building a payments ledger handling
                millions of transactions a day across distributed services.
              </div>
            </div>
            <div className={`${styles.messageGroup} ${styles.messageGroupUser}`}>
              <span className={styles.messageLabel}>Recruiter</span>
              <div className={styles.bubbleUser}>Open to remote roles?</div>
            </div>
            <div className={`${styles.messageGroup} ${styles.messageGroupBot}`}>
              <span className={styles.messageLabel}>Chatfolio</span>
              <div className={styles.bubbleBot}>
                Yes — remote or hybrid, based in Dhaka or fully remote internationally.
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} videoId={DEMO_VIDEO_ID} />
    </section>
  );
}
