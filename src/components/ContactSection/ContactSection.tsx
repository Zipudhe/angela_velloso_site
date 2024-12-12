import React, { FC } from 'react'
import { Section } from '../Section/Section'
import { Contact } from '../Contact/Contact'
import { ContactWrapper } from './sytle'

export const ContactSection: FC = () => {

  return (
    <Section id="contatos" title="Contato">
      <ContactWrapper>
        <Contact title="Durate Velloso" phone="77 777777777" instagram='@duo_arte' />
        <Contact title="Angela Velloso" phone="77 777777777" instagram="@angela velloso" />
      </ContactWrapper>
    </Section>
  )
}
