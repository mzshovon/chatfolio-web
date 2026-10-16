import AudienceToggle from "./AudienceToggle";
import ChatDemo from "./ChatDemo";
import styles from "./Hero.module.css";
import type { Audience } from "@/lib/audience";
import { RECRUITER_CHAT_URL, SIGN_UP_URL } from "@/lib/urls";

const COPY = {
  candidate: {
    sub: "Upload your CV once. Chatfolio turns it into an AI portfolio that answers recruiter questions about your skills, projects and availability, 24/7.",
    cta: "Create my Chatfolio, free",
    href: SIGN_UP_URL,
    micro: "Free forever plan · No credit card · Live in 3 minutes",
  },
  recruiter: {
    sub: "Skip the CV pile. Ask any candidate's AI portfolio about their experience, notice period and time zone, then book a call in minutes.",
    cta: "Find candidates",
    href: RECRUITER_CHAT_URL,
    micro: "Always free for recruiters · No account needed to chat",
  },
};

type HeroProps = {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
};

export default function Hero({ audience, onAudienceChange }: HeroProps) {
  const copy = COPY[audience];

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <AudienceToggle audience={audience} onChange={onAudienceChange} />
          <h1 className={styles.headline}>
            Recruiters chat with your CV. <em>You get hired faster.</em>
          </h1>
          <p className={styles.sub}>{copy.sub}</p>
          <div className={styles.ctaRow}>
            <a href={copy.href} target="_blank" className={`btn btn-primary ${styles.cta}`}>
              {copy.cta}
            </a>
            <a href="#product" className={`btn btn-secondary ${styles.cta}`}>
              Watch how it works
            </a>
          </div>
          <p className={styles.micro}>{copy.micro}</p>
        </div>
        <ChatDemo />
      </div>
    </section>
  );
}
