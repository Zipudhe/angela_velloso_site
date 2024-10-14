"use client"

import React, { FC } from 'react'
import Image from "next/image"
import BlurData from '../../assets/icons/blurimage.png'

interface IIcon {
  path: string
  name?: string
}

export const Icon: FC<IIcon> = ({ path, name }) => {

  return (
    <Image
      id={name ?? ''}
      alt={name ?? ''}
      src={path}
      placeholder='blur'
      blurDataURL="../../assets/icons/blurimage.png"
    />
  )
}
