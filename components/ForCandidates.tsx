import styles from "./Audience.module.css";
import { SIGN_UP_URL } from "@/lib/urls";

const POINTS = [
  "Answers recruiters day and night, even when you're offline",
  "You approve every word before it goes live",
  "Read every recruiter conversation from your dashboard",
];

const SHARE = ["Add to LinkedIn Featured", "Copy ready-made post", "QR code for your CV"];

export default function ForCandidates() {
  return (
    <div id="candidates" className={`${styles.card} ${styles.light}`}>
      <div className="eyebrow">For candidates</div>
      <h3 className={styles.title}>Stop repeating your story on every screening call.</h3>
      <ul className={styles.points}>
        {POINTS.map((p) => (
          <li key={p}>
            <span className={styles.tick}>✓</span>
            {p}
          </li>
        ))}
      </ul>
      <div className={styles.share}>
        <div className={styles.shareTitle}>Share in one click after publishing</div>
        <div className={styles.shareChips}>
          {SHARE.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <a href={SIGN_UP_URL} className={styles.link}>
        Create my Chatfolio, free →
      </a>
    </div>
  );
}
