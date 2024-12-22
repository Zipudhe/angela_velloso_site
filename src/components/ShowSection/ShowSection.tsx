"use client" // Futuramente sera alterado para ser um server side component para já trazer com os dados do spotify ou fonte dos shows
import React, { FC } from 'react'
import { ShowsWrapper } from './stype'
import { ShowCard } from '../ShowCard/ShowCard'
import { Section } from '../Section/Section'

export type Show = {
  date: Date,
  title: string,
  location?: string,
  link?: string
}

export const ShowSection: FC = () => {

  const currentDate = new Date()
  const mockedShowWithouLink = {
    date: currentDate,
    title: "Solana Star",
    location: "Radioca",
  }

  const mockedShowWithLink = {
    ...mockedShowWithouLink,
    link: "https://www.google.com.br"
  }

  return <Section id="shows" title="Proximos shows" >
    <ShowsWrapper>
      <ShowCard {...mockedShowWithLink} />
      <ShowCard {...mockedShowWithouLink} />
    </ShowsWrapper>
  </Section>
}
