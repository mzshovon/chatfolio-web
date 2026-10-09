import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import styles from "./LegalPage.module.css";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
};

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Link href="/" aria-label="Chatfolio home">
            <Image src="/Logo.svg" alt="Chatfolio" width={140} height={70} priority className={styles.logo} />
          </Link>
          <Link href="/" className={styles.back}>
            ← Back to home
          </Link>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Last updated: {updated}</p>
        <div className={styles.intro}>{intro}</div>

        <nav className={styles.toc} aria-label="Table of contents">
          <p className={styles.tocTitle}>Contents</p>
          <ol className={styles.tocList}>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className={styles.section}>
            <h2>
              {i + 1}. {s.title}
            </h2>
            {s.content}
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
