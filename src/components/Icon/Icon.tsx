"use client"

import React, { FC } from 'react'
import { StyledImage } from './style'

interface IIcon {
  path: string
  name?: string
}

export const Icon: FC<IIcon> = ({ path, name }) => {

  const instagram_path = "../../assets/icons/instagram.svg"

  return (
    <StyledImage
      id={name ?? ''}
      alt={name ?? ''}
      src={path}
      placeholder='blur'
      blurDataURL={"../../assets/icons/blurimage.png"}
    />
  )
}
