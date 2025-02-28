import React, { FC } from 'react'
import { ContactDiv, ContactLink } from './sytle'
import { TypographParagraph } from '../Typograph'
import { Icon } from '../Icon/Icon'

type ContactData = {
  title: string,
  details?: string,
  phone?: string
  instagram?: string
}

export const Contact: FC<ContactData> = ({ title, details, phone, instagram }) => {
  const phoneRegex = /(\s*)[-]*/g
  const cleanPhone = phone?.replace(phoneRegex, "")

  return (
    <ContactDiv>
      <TypographParagraph as="h2"> {title} </TypographParagraph>
      {details && <TypographParagraph> {details} </TypographParagraph>}
      <ContactLink href={`https://wa.me/55${cleanPhone}`} target='_blank' >
        <Icon name="whatsapp" />
        {phone}
      </ContactLink>

      <ContactLink href={`https://instagram.com.br/${instagram}`} target='_blank' >
        <Icon name="instagram" />
        @{instagram}
      </ContactLink>
    </ContactDiv>
  )
}
