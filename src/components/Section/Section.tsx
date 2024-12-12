"use client"
import React, { FC } from 'react'
import { SectionWrapper } from './style'
import { TypographParagraph } from '../Typograph'

interface ISection {
  title?: string,
  children?: React.ReactNode,
  id?: string
}

export const Section: FC<ISection> = ({ title, children, ...props }) => {

  return (
    <SectionWrapper {...props} >
      <TypographParagraph as="h2" > {title} </TypographParagraph>
      {children}
    </SectionWrapper>
  )
}
