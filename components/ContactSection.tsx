import styles from "./ContactSection.module.css";

type ContactSectionProps = {
  onContact: () => void;
};

export default function ContactSection({ onContact }: ContactSectionProps) {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>Have a question? Talk to us.</div>
        <button type="button" className="btn btn-accent" onClick={onContact}>
          Contact us
        </button>
      </div>
    </section>
  );
}
