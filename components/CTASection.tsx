import styles from "./CTASection.module.css";
import { SIGN_UP_URL } from "@/lib/urls";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>Ready to let your work speak for itself?</div>
        <a href={SIGN_UP_URL} className="btn btn-primary">
          Create your chatfolio — it&apos;s free
        </a>
      </div>
    </section>
  );
}
