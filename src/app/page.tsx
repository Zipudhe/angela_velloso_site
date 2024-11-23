"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { AboutSection } from '../components/AboutSection/AboutSection'
import { MediaSection } from '../components/MediaSection/MediaSection'
import { ReleaseSection } from "@/components/ReleaseSection/ReleaseSection";
import { Shows } from "@/components/Shows/Shows";
import { Section } from "@/components/Section/Section";

export default function Home() {
  return (
    <ApplicationTheme>
      <main className={styles.main}>
        <Section id="sobre" title="Angela Velloso">
          <AboutSection />
        </Section>
        <Section>
          <MediaSection />
        </Section>
        <Section id="release" title="Ultimos lançamentos" >
          <ReleaseSection />
        </Section>
        <Section id="shows" title="Proximos shows" >
          <Shows shows={[]} />
        </Section>
      </main>
    </ApplicationTheme>
  );
}
