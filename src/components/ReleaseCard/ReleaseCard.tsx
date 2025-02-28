import React, { FC } from 'react'
import { Card, CardImage, CardTitle } from './style'
import { Album } from '../ReleaseSection/ReleaseSection'

export interface IReleaseCard {
  album: Album
}


export const ReleaseCard: FC<IReleaseCard> = ({ album }) => {

  return (
    <Card target='_blank' href={album.external_urls.spotify} >
      <CardImage src={album.images[0].url} alt={"Album cover"} />
      <CardTitle as="h3" > {album.name} </CardTitle>
    </Card>
  )
}
