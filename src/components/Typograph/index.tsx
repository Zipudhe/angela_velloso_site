// Quais o possiveis tipos de texto ?
// - Texto: Pode ser span ou paragraph
// - Titulos: Que são a familia H de tags
// - Legendas: Texto que irao em baixo de textos principais ou imagens
//
//
// # Span, Paragraph e legendas podem ser um Component só utilizando a técnica de DynamicComponent
import { ReactNode, FC } from 'react'
import { styled, css, } from 'styled-components'

const BaseStyledTypograph = styled.div``

type TypographProps = {
  props: string,
  children: ReactNode
}

export const DynamicTypograph: FC<TypographProps> = ({ children }) => {
  return (
    <BaseStyledTypograph>
      {children}
    </BaseStyledTypograph>
  )
}
