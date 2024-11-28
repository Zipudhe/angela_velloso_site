"use client"

import React, { FC } from 'react';
import { IconsWrapper } from './styles'
import { Icon } from '../Icon/Icon'

import InstagramIcon from '../../assets/icons/instagram.svg'
import SpotifyIcon from '../../assets/icons/spotify.svg'
import DeezerIcon from '../../assets/icons/deezer.svg'
import SoundcloudIcon from '../../assets/icons/soundcloud.svg'
import ItunesIcon from '../../assets/icons/itunes.svg'
import YoutubeIcon from '../../assets/icons/youtube.svg'
import { Section } from '../Section/Section';


export const MediaSection: FC = () => {

  return (
    <Section id="media">
      <IconsWrapper>
        <a target='_blank' href='https://www.instagram.com/angela_velloso/' >
          <Icon path={InstagramIcon} />
        </a>
        <a target='_black' href="https://open.spotify.com/artist/42GPYWdoneNvorglZQDPzo?si=N-37bDu4Qh-KfLudgTs-Bg&nd=1&dlsi=c215c1d66f6a48a5">
          <Icon path={SpotifyIcon} />
        </a>
        <a target='_blank' href='https://www.deezer.com/us/artist/74051492'>
          <Icon path={DeezerIcon} />
        </a>
        <a target="_blank" href='https://soundcloud.com/angela-velloso'>
          <Icon path={SoundcloudIcon} />
        </a>
        <a target='_blank' href="https://music.apple.com/br/artist/angela-velloso/1480023629">
          <Icon path={ItunesIcon} />
        </a>
        <a target='_blank' href='https://www.youtube.com/channel/UCOHbKQpeujl9IK0BlxPGmUg'>
          <Icon path={YoutubeIcon} />
        </a>
      </IconsWrapper>
    </Section>
  )
}
