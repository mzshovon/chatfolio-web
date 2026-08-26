import { MessageCircleMore, FileText, ShieldCheck, BarChart3 } from "lucide-react";
import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: MessageCircleMore,
    title: "AI chat, grounded",
    desc: "Answers come only from your approved profile — never invented.",
  },
  {
    icon: FileText,
    title: "CV auto-parse",
    desc: "Upload once — experience, skills, and education fill in themselves.",
  },
  {
    icon: ShieldCheck,
    title: "You approve every word",
    desc: "Review and edit the AI's intro and summary before it ever goes live.",
  },
  {
    icon: BarChart3,
    title: "See who's asking",
    desc: "Read every recruiter conversation from your own dashboard.",
  },
];

export default function Features() {
  return (
    <section id="product" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Everything you need to be reachable</h2>
      <div className={styles.grid}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.iconWrap}>
              <f.icon size={22} strokeWidth={1.75} />
            </div>
            <div className={styles.cardTitle}>{f.title}</div>
            <div className={styles.cardDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
