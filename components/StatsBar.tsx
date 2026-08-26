import styles from "./StatsBar.module.css";

const STATS = [
  { value: "18K+", label: "Recruiter conversations" },
  { value: "2,400", label: "Chatfolios published" },
  { value: "92%", label: "Recruiter satisfaction" },
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
