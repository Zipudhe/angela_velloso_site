"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ApplicationTheme>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1> Main </h1>
        </main>
        <footer className={styles.footer}>
          <h2> Footer </h2>
        </footer>
      </div>
    </ApplicationTheme>
  );
}
