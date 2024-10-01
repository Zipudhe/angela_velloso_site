"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { TypographParagraph } from '../components/Typograph'
import { AboutSection } from '../components/AboutSection/AboutSection'

export default function Home() {
  return (
    <ApplicationTheme>
      <div className={styles.page}>
        <main className={styles.main}>
          <AboutSection />
        </main>
        <footer className={styles.footer}>
          <TypographParagraph as="h1" > Footer </TypographParagraph>
        </footer>
      </div>
    </ApplicationTheme>
  );
}
