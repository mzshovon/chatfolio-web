"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./VideoFacade.module.css";

type VideoFacadeProps = {
  videoId: string;
  title: string;
};

/**
 * Renders only a static thumbnail + play button until clicked.
 * The heavy YouTube iframe/player JS never loads on page load,
 * so it never competes with the rest of the page for bandwidth or main-thread time.
 */
export default function VideoFacade({ videoId, title }: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className={styles.wrapper}>
        <iframe
          className={styles.frame}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumbnail} alt="" className={styles.thumb} loading="lazy" />
      <span className={styles.playButton}>
        <Play size={26} fill="currentColor" strokeWidth={0} />
      </span>
    </button>
  );
}
