"use client";

import React, { FC } from "react"
import { CardWrapper, MainSection } from './style'
import { TypographParagraph } from '../Typograph'

export const ReleaseSection: FC = () => {

  return (
    <MainSection>
      <TypographParagraph as="h2" > ÚLTIMOS LANÇAMENTOS </TypographParagraph>
      <CardWrapper>
      </CardWrapper>
    </MainSection>
  )
}
