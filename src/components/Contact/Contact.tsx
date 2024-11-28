import React, { FC } from 'react'
import { ContactDiv, ContactLink } from './sytle'
import { TypographParagraph } from '../Typograph'
import { Icon } from '../Icon/Icon'

import InstagramIcon from '../../assets/icons/instagram.svg'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'

type ContactData = {
  title: string,
  details?: string,
  phone?: string
  instagram?: string
}

export const Contact: FC<ContactData> = ({ title, details, phone, instagram }) => {

  return (
    <ContactDiv>
      <TypographParagraph as="h2"> {title} </TypographParagraph>
      {details && <TypographParagraph> {details} </TypographParagraph>}
      <ContactLink href='http://google.com.br' target='_blank' >
        <Icon path={WhatsappIcon} />
        {phone}
      </ContactLink>

      <ContactLink href="https://instagram.com.br" target='_blank' >
        <Icon path={InstagramIcon} />
        {instagram}
      </ContactLink>
    </ContactDiv>
  )
}
