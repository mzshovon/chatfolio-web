import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <span>© {new Date().getFullYear()} Chatfolio</span>
      <span className={styles.links}>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/#contact">Contact</Link>
      </span>
    </footer>
  );
}
