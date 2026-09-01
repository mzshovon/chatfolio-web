import { MessageCircleMore, FileText, ShieldCheck, BarChart3 } from "lucide-react";
import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: MessageCircleMore,
    title: "Your AI. Your information. Your rules",
    desc: "Chatfolio answers using information from your approved professional profile. It doesn't need to invent a career story for you.",
  },
  {
    icon: FileText,
    title: "Your CV, automatically structured",
    desc: "Upload your CV once. Chatfolio extracts your experience, education, skills, and projects into your profile.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    desc: "Review and edit the AI's intro and summary before it ever goes live.",
  },
  {
    icon: BarChart3,
    title: "See every conversation",
    desc: "Know what recruiters are asking and understand what they're interested in.",
  },
];

export default function Features() {
  return (
    <section id="product" className={`container ${styles.section}`}>
      <h2 className={styles.title}>Your CV gets questions. Chatfolio answers them.</h2>
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
