"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import VideoFacade from "./VideoFacade";
import styles from "./DemoModal.module.css";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
  videoId: string;
};

export default function DemoModal({ open, onClose, videoId }: DemoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Chatfolio demo video"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close demo">
          <X size={18} />
          Close
        </button>
        <VideoFacade videoId={videoId} title="Chatfolio demo" />
      </div>
    </div>
  );
}
