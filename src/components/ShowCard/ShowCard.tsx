"use client"
import React, { FC } from 'react'
import { Show } from '../ShowSection/ShowSection'
import { Card, CardSection } from './style'
import { TypographParagraph } from '../Typograph'



export const ShowCard: FC<Show> = ({ date, title, location, link }) => {

  const getMonth = new Intl.DateTimeFormat("pt-BR", { month: "short" }).format
  const getDay = new Intl.DateTimeFormat("pt-BR", { day: "2-digit" }).format


  return (
    <Card>
      <CardSection>
        <TypographParagraph as="h2"> {getDay(date)} </TypographParagraph>
        <TypographParagraph as="h3"> {getMonth(date)} </TypographParagraph>
      </CardSection>
      <hr />
      <CardSection>
        <TypographParagraph as="h2"> {title} </TypographParagraph>
      </CardSection>
      <CardSection>
        <TypographParagraph as="h3" > Local: </TypographParagraph>
        <TypographParagraph size="large" > {location} </TypographParagraph>
      </CardSection>
      {
        link ?
          <CardSection>
            <TypographParagraph as="h3"> Link: </TypographParagraph>
            <TypographParagraph> {link} </TypographParagraph>
          </CardSection>
          :
          null
      }
    </Card>
  )
}
