import AudienceToggle from "./AudienceToggle";
import VideoFacade from "./VideoFacade";
import styles from "./HowItWorks.module.css";
import { CANDIDATE_VIDEO_ID, RECRUITER_VIDEO_ID, type Audience } from "@/lib/audience";

const STEPS: Record<Audience, { title: string; body: string }[]> = {
  candidate: [
    {
      title: "Upload your CV",
      body: "PDF or Word. Experience, skills, projects and education are pulled out for you.",
    },
    {
      title: "Approve what goes live",
      body: "Review every section and your AI-written bio. Nothing publishes without your OK.",
    },
    {
      title: "Share your link",
      body: "yourname.chatfolio.chat goes on LinkedIn, your CV and email signature. Recruiters start asking.",
    },
  ],
  recruiter: [
    {
      title: "Find a candidate",
      body: "Search by role, skill, remote or hybrid, and time-zone overlap.",
    },
    {
      title: "Ask what you'd ask on a call",
      body: "Notice period, depth of skill, salary range. Every answer cites the candidate's approved profile.",
    },
    {
      title: "Book a call",
      body: "Pick a time and get a Google Meet link. The candidate is notified by SMS.",
    },
  ],
};

const VIDEOS: Record<Audience, { id: string; title: string }> = {
  candidate: { id: CANDIDATE_VIDEO_ID, title: "Chatfolio tutorial for candidates" },
  recruiter: { id: RECRUITER_VIDEO_ID, title: "Chatfolio tutorial for recruiters" },
};

type HowItWorksProps = {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
};

export default function HowItWorks({ audience, onAudienceChange }: HowItWorksProps) {
  const video = VIDEOS[audience];

  return (
    <section id="product" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className="eyebrow eyebrow-dark">How it works</div>
          <h2 className={styles.title}>Three steps. About three minutes.</h2>
          <div className={styles.toggle}>
            <AudienceToggle
              audience={audience}
              onChange={onAudienceChange}
              labels={["For candidates", "For recruiters"]}
            />
          </div>
          <ol className={styles.steps}>
            {STEPS[audience].map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.num}>{i + 1}</span>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepBody}>{step.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.video}>
          <VideoFacade key={video.id} videoId={video.id} title={video.title} />
        </div>
      </div>
    </section>
  );
}
