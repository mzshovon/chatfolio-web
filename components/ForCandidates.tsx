import { CheckCircle2 } from "lucide-react";
import styles from "./SplitSection.module.css";

const POINTS = [
  "Auto-parsed CV — experience, projects, skills, education",
  "You approve every AI-written word before it goes live",
  "Read every recruiter conversation from your dashboard",
];

export default function ForCandidates() {
  return (
    <section id="candidates" className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <div>
          <span className="chip">For candidates</span>
          <h2 className={styles.title}>Stop repeating your story on every call</h2>
          <p className={styles.desc}>
            Upload your CV once. Chatfolio builds a profile, drafts your intro and
            summary for you to approve, and answers recruiter questions about your
            real experience — salary range, availability, depth of skill — accurately,
            on your terms, at any hour.
          </p>
          <a href="#pricing" className="btn btn-primary" style={{ marginTop: 22 }}>
            Build your chatfolio
          </a>
        </div>
        <div className={styles.pointList}>
          {POINTS.map((point) => (
            <div key={point} className={styles.point}>
              <CheckCircle2 size={18} className={styles.pointIcon} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
