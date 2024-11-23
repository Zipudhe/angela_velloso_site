"use client" // Futuramente sera alterado para ser um server side component para já trazer com os dados do spotify ou fonte dos shows
import React, { FC } from 'react'
import { TypographParagraph } from '../Typograph'
import { ShowsWrapper, Wrapper } from './stype'
import { ShowCard } from '../ShowCard/ShowCard'

export type Show = {
  date: Date,
  title: string,
  location?: string,
  link?: string
}

interface IShows {
  shows: Show[]
}

export const Shows: FC<IShows> = ({ shows }) => {

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

  return <Wrapper>
    <TypographParagraph as="h1" > Próximos shows </TypographParagraph>
    <ShowsWrapper>
      <ShowCard {...mockedShowWithLink} />
      <ShowCard {...mockedShowWithouLink} />
    </ShowsWrapper>
  </Wrapper>
}
