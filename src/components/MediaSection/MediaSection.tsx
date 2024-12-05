"use client"

import React, { FC } from 'react';
import { IconsWrapper } from './styles'
import { Icon } from '../Icon/Icon'

import { Section } from '../Section/Section';

export const MediaSection: FC = () => {

  return (
    <Section id="media">
      <IconsWrapper>
        <a target='_blank' href='https://www.instagram.com/angela_velloso/' >
          <Icon name="instagram" />
        </a>
        <a target='_black' href="https://open.spotify.com/artist/42GPYWdoneNvorglZQDPzo?si=N-37bDu4Qh-KfLudgTs-Bg&nd=1&dlsi=c215c1d66f6a48a5">
          <Icon name="spotify" />
        </a>
        <a target='_blank' href='https://www.deezer.com/us/artist/74051492'>
          <Icon name="deezer" />
        </a>
        <a target="_blank" href='https://soundcloud.com/angela-velloso'>
          <Icon name="soundcloud" />
        </a>
        <a target='_blank' href="https://music.apple.com/br/artist/angela-velloso/1480023629">
          <Icon name="itunes" />
        </a>
        <a target='_blank' href='https://www.youtube.com/channel/UCOHbKQpeujl9IK0BlxPGmUg'>
          <Icon name="youtube" />
        </a>
      </IconsWrapper>
    </Section>
  )
}
