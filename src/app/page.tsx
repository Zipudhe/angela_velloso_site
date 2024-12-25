"use client"

import localFont from 'next/font/local'

import { ApplicationTheme } from "@/libs/theme";
import { AboutSection } from '@/components/AboutSection/AboutSection'
import { MediaSection } from '@/components/MediaSection/MediaSection'
import { ReleaseSection } from "@/components/ReleaseSection/ReleaseSection";
import { ShowSection } from "@/components/ShowSection/ShowSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { StyledMain } from './style';

const DiaryFont = localFont({
  variable: '--diary-font',
  src: '../assets/fonts/classical_diary/ClassicalDiary-Regular.ttf',
  fallback: ['Roboto'],
})

export default function Home() {
  return (
    <ApplicationTheme>
      <StyledMain className={DiaryFont.className}>
        <AboutSection />
        <MediaSection />
        <ReleaseSection />
        <ShowSection />
        <ContactSection />
      </StyledMain>
    </ApplicationTheme>
  );
}
