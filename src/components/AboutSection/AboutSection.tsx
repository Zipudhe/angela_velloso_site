"use client"

import React, { FC } from 'react';

import { TypographParagraph } from '../Typograph'
import { Wrapper } from './styles'
import { Section } from '../Section/Section'

const mockedText = `
Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque integer penatibus cras bibendum hac tincidunt cubilia. Natoque eu auctor vehicula natoque malesuada efficitur blandit dictum. Habitasse fusce facilisi laoreet nascetur at lobortis nostra bibendum. Neque nullam ultricies accumsan himenaeos; habitasse eros efficitur turpis. Nec sed etiam ad facilisi feugiat inceptos aenean imperdiet vitae. Per ridiculus nullam potenti libero at hac ut aliquam. Iaculis et lobortis turpis nunc orci aenean maximus ultricies. Mi bibendum aliquet aliquet eros ornare faucibus nullam donec.

Interdum aliquet phasellus natoque senectus nulla; himenaeos convallis porta. Dapibus eget aliquet morbi imperdiet eget, auctor volutpat ligula vitae. Convallis feugiat per inceptos, sociosqu per tellus. Ad elit facilisi fusce interdum netus venenatis. Dis pellentesque conubia gravida justo ultricies tincidunt? Vel sagittis vulputate dui faucibus vitae et. Condimentum nisi litora morbi lorem phasellus. Adis dictum praesent class finibus enim consequat! Condimentum erat lacus dui; tortor eleifend nostra.
`

export const AboutSection: FC = () => {

  return <Section id="sobre" title="Angela Velloso">
    <TypographParagraph as="p" > {mockedText} </TypographParagraph>
  </Section>
}

