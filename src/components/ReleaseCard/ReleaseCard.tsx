import React, { FC } from 'react'
import { Card, CardImage, CardTitle } from './style'

export interface IReleaseCard {
  img: string,
  title: string,
  alt: string
}


export const ReleaseCard: FC<IReleaseCard> = ({ img, title, alt }) => {

  return (
    <Card>
      <CardImage src={img} />
      <CardTitle as="h3" > {title} </CardTitle>
    </Card>
  )
}
