import type { ReactNode } from "react";
import styles from "../css/ChildFreeNote.module.css";

interface ChildFreeNoteProps {
  children?: ReactNode;
}

export const ChildFreeNote = ({ children }: ChildFreeNoteProps) => (
  <div className={styles.note} role="note">
    <p className={styles.label}>Barnfritt bröllop</p>
    <p className={styles.text}>
      {children ?? "Vi har valt att fira vår dag utan barn. Tack för att ni förstår!"}
    </p>
  </div>
);