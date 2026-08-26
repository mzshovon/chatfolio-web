import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <span>© {new Date().getFullYear()} Chatfolio</span>
      <span>Privacy · Terms · Contact</span>
    </footer>
  );
}
