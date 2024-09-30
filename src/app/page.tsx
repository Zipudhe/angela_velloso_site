"use client"

import { ApplicationTheme } from "@/libs/theme";
import styles from "./page.module.css";
import { TypographParagraph } from '../components/Typograph'

export default function Home() {
  return (
    <ApplicationTheme>
      <div className={styles.page}>
        <main className={styles.main}>
          <TypographParagraph style={{ fontWeight: 'bold' }} as="p" > Main </TypographParagraph>
        </main>
        <footer className={styles.footer}>
          <TypographParagraph as="h1" > Footer </TypographParagraph>
        </footer>
      </div>
    </ApplicationTheme>
  );
}
