import { CheckCircle2 } from "lucide-react";
import styles from "./SplitSection.module.css";
import { SIGN_UP_URL } from "@/lib/urls";

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
          <h2 className={styles.title}>Stop repeating your story on every screening call</h2>
          <p className={styles.desc}>
            Your CV tells recruiters what you've done. Chatfolio lets them ask why, how, and what you can do next. 
            Upload your CV once. Chatfolio builds your professional profile and lets recruiters ask questions directly. 
            You decide what information is published. Chatfolio handles the repetitive questions.
          </p>
          <a href={SIGN_UP_URL} className="btn btn-primary" style={{ marginTop: 22 }}>
            Create my Chatfolio — Free
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
