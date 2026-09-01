import styles from "./StatsBar.module.css";

const STATS = [
  { value: "24/7", label: "Recruiter availability" },
  { value: "1 CV", label: "Your starting point" },
  { value: "100%", label: "You control what goes live" },
];

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
