import React, { FC } from "react"
import { CardWrapper } from './style'
import { ReleaseCard, IReleaseCard } from '../ReleaseCard/ReleaseCard'
import { Section } from "../Section/Section";

export const ReleaseSection: FC = async () => {


  const mockedCard = {
    title: "Feijoada abortada (incidental: feijoada completa)",
    alt: "imagem do album",
    img: "https://plus.unsplash.com/premium_photo-1664007711018-d7cb92e664b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhbnN8ZW58MHx8MHx8fDA%3D"
  } as IReleaseCard

  return (
    <Section id="release" title="Ultimos lançamentos" >
      <CardWrapper>
        <ReleaseCard title={mockedCard.title} alt={mockedCard.alt} img={mockedCard.img} />
        <ReleaseCard title={mockedCard.title} alt={mockedCard.alt} img={mockedCard.img} />
        <ReleaseCard title={mockedCard.title} alt={mockedCard.alt} img={mockedCard.img} />
        <ReleaseCard title={mockedCard.title} alt={mockedCard.alt} img={mockedCard.img} />
        <ReleaseCard title={mockedCard.title} alt={mockedCard.alt} img={mockedCard.img} />
      </CardWrapper>
    </Section>
  )
}
