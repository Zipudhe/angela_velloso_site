"use client"

import React, { FC } from 'react'
import {
  FaInstagram,
  FaDeezer,
  FaItunes,
  FaSpotify,
  FaWhatsapp,
  FaSoundcloud,
  FaYoutube
} from 'react-icons/fa'
import { StyledIcon } from './style'

type AvailableIcons = "instagram" | "deezer" | "itunes" | "spotify" | "whatsapp" | "soundcloud" | "youtube"

interface IIcon {
  name: AvailableIcons
}

const IconsOptions = {
  instagram: FaInstagram,
  deezer: FaDeezer,
  itunes: FaItunes,
  spotify: FaSpotify,
  whatsapp: FaWhatsapp,
  soundcloud: FaSoundcloud,
  youtube: FaYoutube
}

export const Icon: FC<IIcon> = ({ name }) => {

  const SelectedIcon = IconsOptions[name]
  console.log({ SelectedIcon })

  return (
    <StyledIcon>
      {SelectedIcon ? <SelectedIcon size={48} /> : <span> Fallback </span>}
    </StyledIcon>
  )
}
