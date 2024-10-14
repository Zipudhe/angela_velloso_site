"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { TypographParagraph } from '../components/Typograph'
import { AboutSection } from '../components/AboutSection/AboutSection'
import { MediaSection } from '../components/MediaSection/MediaSection'

export default function Home() {
  return (
    <ApplicationTheme>
      <div className={styles.page}>
        <main className={styles.main}>
          <AboutSection />
          <MediaSection />
        </main>
        <footer className={styles.footer}>
          <TypographParagraph as="h1" > Footer </TypographParagraph>
          <TypographParagraph as={"span"} > icons by <a target="_blank" href="https://icons8.com">Icons8</a> </TypographParagraph>
        </footer>
      </div>
    </ApplicationTheme>
  );
}
