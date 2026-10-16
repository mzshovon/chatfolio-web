import styles from "./CTASection.module.css";
import { RECRUITER_CHAT_URL, SIGN_UP_URL } from "@/lib/urls";

export default function CTASection() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>Let your CV answer the questions.</h2>
        <div className={styles.row}>
          <a href={SIGN_UP_URL} className={`btn ${styles.light}`}>I&apos;m job hunting</a>
          <a href={RECRUITER_CHAT_URL} className={`btn ${styles.darkBtn}`}>I&apos;m hiring</a>
        </div>
      </div>
    </section>
  );
}
