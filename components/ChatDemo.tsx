"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatDemo.module.css";

type Message = { role: "rec" | "bot"; text: string; source?: string };

const QA = [
  {
    q: "Open to remote?",
    keys: ["remote", "hybrid", "relocat", "onsite"],
    a: "Yes. I'm based in Dhaka (GMT+6) and open to fully remote roles, with 3–4 hours of overlap with Toronto or London.",
    source: "From: Preferences",
  },
  {
    q: "Strongest project?",
    keys: ["project", "built", "proud"],
    a: "A payments dashboard used by 40k merchants. I led the React front end and the Node API, and cut page load time by 60%.",
    source: "From: Projects · Bkash Merchant Portal",
  },
  {
    q: "Notice period?",
    keys: ["notice", "start", "available", "join"],
    a: "I can start within 30 days of an offer.",
    source: "From: Availability",
  },
  {
    q: "Main tech stack?",
    keys: ["stack", "tech", "skill", "react", "node", "language"],
    a: "React, TypeScript, Node.js and PostgreSQL day to day, with AWS for deployment. 6 years in total.",
    source: "From: Skills",
  },
];

const FALLBACK = {
  a: "That isn't in my approved profile yet. I can share my CV, or you can book a quick call with me.",
  source: "Not in profile · no guessing",
};

const INITIAL: Message[] = [
  { role: "rec", text: "Hi Mahir, what do you do?" },
  {
    role: "bot",
    text: "I'm a full-stack engineer in Dhaka with 6 years of experience building fintech products in React and Node.",
    source: "From: Approved bio",
  },
];

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const ask = (text: string) => {
    if (!text || typing) return;
    const low = text.toLowerCase();
    const hit = QA.find((x) => x.q === text || x.keys.some((k) => low.includes(k)));
    const answer = hit ?? FALLBACK;
    setDraft("");
    setTyping(true);
    setMessages((m) => [...m, { role: "rec", text }]);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: answer.a, source: answer.source }]);
    }, 900);
  };

  const asked = new Set(messages.map((m) => m.text));
  const chips = QA.filter((x) => !asked.has(x.q));

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} aria-hidden="true">MH</div>
        <div className={styles.who}>
          <div className={styles.name}>Mahir Hasan</div>
          <div className={styles.meta}>Full-stack engineer · Dhaka · mahir.chatfolio.chat</div>
        </div>
        <div className={styles.live}>
          <span className={styles.liveDot} />
          Live demo
        </div>
      </div>

      <div className={styles.messages} ref={scrollRef} aria-live="polite">
        {messages.map((m, i) =>
          m.role === "rec" ? (
            <div key={i} className={styles.bubbleRec}>{m.text}</div>
          ) : (
            <div key={i} className={styles.botGroup}>
              <div className={styles.bubbleBot}>{m.text}</div>
              <div className={styles.source}>{m.source}</div>
            </div>
          )
        )}
        {typing && (
          <div className={styles.typing} aria-label="Typing">
            <span /><span /><span />
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className={styles.chips}>
          {chips.map((c) => (
            <button key={c.q} type="button" className={styles.chip} onClick={() => ask(c.q)}>
              {c.q}
            </button>
          ))}
        </div>
      )}

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          ask(draft.trim());
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask Mahir's chatfolio anything…"
          aria-label="Ask Mahir's chatfolio a question"
          maxLength={200}
          className={styles.input}
        />
        <button type="submit" className={styles.send}>Ask</button>
      </form>

      <div className={styles.footer}>
        <span>Answers come only from Mahir&apos;s approved profile</span>
        <span className={styles.powered}>Powered by Chatfolio</span>
      </div>
    </div>
  );
}
