import ForCandidates from "./ForCandidates";
import ForRecruiters from "./ForRecruiters";
import styles from "./Audiences.module.css";

export default function Audiences() {
  return (
    <section className={`container ${styles.grid}`}>
      <ForCandidates />
      <ForRecruiters />
    </section>
  );
}
