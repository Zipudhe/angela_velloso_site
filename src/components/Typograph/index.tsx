// Quais o possiveis tipos de texto ?
// - Texto: Pode ser span ou paragraph
// - Titulos: Que são a familia H de tags
// - Legendas: Texto que irao em baixo de textos principais ou imagens
//
//
// # Span, Paragraph e legendas podem ser um Component só utilizando a técnica de DynamicComponent
import { ReactNode, FC, HTMLAttributes } from 'react'
import { styled, css, RuleSet } from 'styled-components'

type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'

const BaseStyledTypograph = styled.p`
  color: red;
`

type TypographProps = {
  as: TextTypes,
  props?: HTMLAttributes<HTMLElement>,
  children: ReactNode
}

const BaseTextStyle = css`
  color: #FFF;
  letter-spacing: 0.5rem;
  line-height: 155%;
`

const GetTextProperties: (type: TextTypes) => RuleSet<object> = (type) => {
  const fontSizes = {
    'h1': '64px',
    'h2': '56px',
    'h3': '48px',
    'h4': '32px',
    'p': '18px',
    'span': '18px',
  }
  return css`
    font-size: ${fontSizes[type]}
`
}

export const DynamicTypograph: FC<TypographProps> = ({ children, props, as = 'p' }) => {
  return (
    <BaseStyledTypograph as={as} {...props}>
      {children}
    </BaseStyledTypograph>
  )
}


export const TypographParagraph = styled(DynamicTypograph)`
  ${BaseTextStyle}
  ${props => GetTextProperties(props.as)}
`
