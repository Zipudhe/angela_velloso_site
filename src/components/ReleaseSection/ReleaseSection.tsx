"use client"

import React, { FC, useEffect, useState, Suspense } from "react"
import { CardWrapper } from './style'
import { ReleaseCard } from '../ReleaseCard/ReleaseCard'
import { Section } from "../Section/Section";

type External_Url = {
  spotify: string
}

type Image = {
  url: string,
  height: number,
  width: number,
}

export type Album = {
  total_tracks: number,
  external_urls: External_Url,
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
    <Suspense fallback={<h1> Loading... </h1>} >
      <Section id="release" title="Ultimos lançamentos" >
        <CardWrapper>
          {albums?.items.map((album, index) => {
            return (
              <ReleaseCard key={index} album={album} />
            )
          })}
        </CardWrapper>
      </Section>
    </Suspense>
  )
}
