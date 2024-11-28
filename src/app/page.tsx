"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { AboutSection } from '@/components/AboutSection/AboutSection'
import { MediaSection } from '@/components/MediaSection/MediaSection'
import { ReleaseSection } from "@/components/ReleaseSection/ReleaseSection";
import { ShowSection } from "@/components/ShowSection/ShowSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <ApplicationTheme>
      <main className={styles.main}>
        <AboutSection />
        <MediaSection />
        <ReleaseSection />
        <ShowSection />
        <ContactSection />
      </main>
    </ApplicationTheme>
  );
}
