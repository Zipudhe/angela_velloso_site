"use client"

import React, { FC, useEffect, useState } from "react"
import { CardWrapper } from './style'
import { ReleaseCard, IReleaseCard } from '../ReleaseCard/ReleaseCard'
import { Section } from "../Section/Section";

type Image = {
  url: string,
  height: number,
  width: number,
}

type Album = {
  total_tracks: number,
  external_urls: string[],
  images: Image[],
  name: string,
}

export type AlbunsData = {
  total: number,
  items: Album[]
}


export const ReleaseSection: FC = () => {
  const [albums, setAlbums] = useState<AlbunsData | null>(null)

  useEffect(() => {
    const getAlbuns = async () => {
      const response = await fetch("/api")

      if (!response.ok) {
        return null
      }

      const { data } = await response.json()
      setAlbums(data)
      return
    }

    getAlbuns()
  }, [])

  return (
    <Section id="release" title="Ultimos lançamentos" >
      <CardWrapper>
        {albums?.items.map((album) => {
          return (
            <ReleaseCard title={album.name} alt="image cover" img={album.images[0].url} />
          )
        })}
      </CardWrapper>
    </Section>
  )
}
