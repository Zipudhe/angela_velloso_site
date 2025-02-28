"use client"

import React, { FC } from 'react';

import { TypographParagraph } from '../Typograph'
import { Section } from '../Section/Section'

const aboutText = `
Angela Velloso compõe, arranja, grava, edita, mixa, leciona, canta MPB, Jazz, e o que mais quiser - como gosta de frisar - para a artista, a voz é um instrumento tal qual outro qualquer, não há hierarquias. Nascida e criada em Salvador-BA, é bacharel em Música Popular na UFBA (1ªlugar) e realizou intercâmbio em Jazz na Alemanha (Musikhochschule Mannheim). Tem em seu projeto solo dois álbuns autorais lançados, e integra com o cantor e compositor Felipe Fatiota a banda Solana Star; seu próprio quarteto de jazz; o coletivo Outras Vozes, o Grupo Ofá (backing vocal), as Quintas Brasileiras e o quinteto de Beto Martins. É premiada como melhor intérprete na categoria Música com Letra do XX Festival da Educadora FM.
`

export const AboutSection: FC = () => {

  return <Section id="sobre" title="ANGELA VELLOSO">
    <TypographParagraph as="p" > {aboutText} </TypographParagraph>
  </Section>
}

