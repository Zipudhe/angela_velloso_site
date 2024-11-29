"use client"

import { ApplicationTheme } from "@/libs/theme";
import { StyledMain } from './style'
import { AboutSection } from '@/components/AboutSection/AboutSection'
import { MediaSection } from '@/components/MediaSection/MediaSection'
import { ReleaseSection } from "@/components/ReleaseSection/ReleaseSection";
import { ShowSection } from "@/components/ShowSection/ShowSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <ApplicationTheme>
      <StyledMain>
        <AboutSection />
        <MediaSection />
        <ReleaseSection />
        <ShowSection />
        <ContactSection />
      </StyledMain>
    </ApplicationTheme>
  );
}
