import { CheckCircle2 } from "lucide-react";
import styles from "./SplitSection.module.css";
import { RECRUITER_CHAT_URL } from "@/lib/urls";

const POINTS = [
  "Ask what you'd ask in a screening call — get grounded answers",
  "Available around the clock, no scheduling required",
  "Every answer traces back to the candidate's real profile",
];

export default function ForRecruiters() {
  return (
    <section id="recruiters" className={`${styles.section} ${styles.dark}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.pointList} style={{ order: 2 }}>
          {POINTS.map((point) => (
            <div key={point} className={`${styles.point} ${styles.pointDark}`}>
              <CheckCircle2 size={18} className={styles.pointIconAccent} />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div style={{ order: 1 }}>
          <span className="chip chip-dark">For recruiters</span>
          <h2 className={styles.title}>Screen faster, with real answers</h2>
          <p className={`${styles.desc} ${styles.descDark}`}>
            Chat directly with a candidate&apos;s chatfolio to get real, grounded
            answers about their work — no cold outreach, no waiting for a reply, no
            guessing whether the CV tells the whole story.
          </p>
          <a href={RECRUITER_CHAT_URL} className="btn btn-accent" style={{ marginTop: 22 }}>
            Try a live chatfolio
          </a>
        </div>
      </div>
    </section>
  );
}
