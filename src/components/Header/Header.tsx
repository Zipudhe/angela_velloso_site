"use client"

import React from "react";
import { HeaderStyled } from './styles'
import { Nav } from '../Nav/Nav'

export const Header = ({ imageUrl }: { imageUrl?: string }): React.ReactNode => {

  return (
    <HeaderStyled>
      <img src={`/${imageUrl}.jpg`} />
      <Nav />
    </HeaderStyled>
  )
}


