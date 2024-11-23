"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { TypographParagraph } from '../components/Typograph'
import { AboutSection } from '../components/AboutSection/AboutSection'
import { MediaSection } from '../components/MediaSection/MediaSection'
import { ReleaseSection } from "@/components/ReleaseSection/ReleaseSection";
import { Shows } from "@/components/Shows/Shows";

export default function Home() {
  return (
    <ApplicationTheme>
      <main className={styles.main}>
        <AboutSection />
        <MediaSection />
        <ReleaseSection />
        <Shows shows={[]} />
      </main>
      <footer id="footer" className={styles.footer}>
        <TypographParagraph as="h1" > Footer </TypographParagraph>
        <TypographParagraph as={"span"} > icons by <a target="_blank" href="https://icons8.com">Icons8</a> </TypographParagraph>
      </footer>
    </ApplicationTheme>
  );
}
