import React, { FC } from 'react'
import { Section } from '../Section/Section'
import { Contact } from '../Contact/Contact'
import { ContactWrapper } from './sytle'

export const ContactSection: FC = () => {

  return (
    <Section id="contatos" title="Contato">
      <ContactWrapper>
        <Contact title="Durate Velloso" phone="" instagram='duartestudiomusica' />
        <Contact title="Angela Velloso" phone="71 9144-4320" instagram="angela_velloso" />
      </ContactWrapper>
    </Section>
  )
}
