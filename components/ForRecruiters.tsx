import styles from "./Audience.module.css";
import { RECRUITER_CHAT_URL } from "@/lib/urls";

const POINTS = [
  "Search by role, skill, remote/hybrid and time-zone overlap",
  "Ask what you'd ask on a screening call. Answers cite the CV",
  "Book a Google Meet in one click. The candidate gets an SMS",
];

export default function ForRecruiters() {
  return (
    <div id="recruiters" className={`${styles.card} ${styles.dark}`}>
      <div className="eyebrow eyebrow-dark">For recruiters</div>
      <h3 className={styles.title}>Hiring in Bangladesh? Screen candidates in 5 minutes.</h3>
      <ul className={styles.points}>
        {POINTS.map((p) => (
          <li key={p}>
            <span className={styles.tick}>✓</span>
            {p}
          </li>
        ))}
      </ul>
      <div className={styles.compare}>
        <div className={styles.compareBox}>
          <div className={styles.compareLabel}>The usual way</div>
          <div className={styles.compareValue}>38 days</div>
          <div className={styles.compareLabel}>214 CVs read</div>
        </div>
        <div className={`${styles.compareBox} ${styles.compareWin}`}>
          <div className={styles.compareLabel}>With Chatfolio</div>
          <div className={`${styles.compareValue} ${styles.compareAccent}`}>1 search</div>
          <div className={styles.compareLabel}>Meet booked same day</div>
        </div>
      </div>
      <a href={RECRUITER_CHAT_URL} className={styles.link}>
        Find candidates →
      </a>
    </div>
  );
}
