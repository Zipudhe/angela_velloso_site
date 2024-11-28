import { ReactNode, FC, HTMLAttributes, CSSProperties } from 'react'
import { styled, css, RuleSet } from 'styled-components'

type TextSizes = 'small' | 'medium' | 'large'
type TextElements = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'

const BaseStyledTypograph = styled.p`
  color: #FFF;
`

type TypographProps = {
  as?: TextElements,
  size?: TextSizes,
  props?: HTMLAttributes<HTMLElement>,
  style?: RuleSet<object>
  children: ReactNode
}

const BaseTextStyle = css`
  color: #FFF;
  letter-spacing: 0.3rem;
  line-height: 155%;
`

const GetTextProperties: (type?: TextElements, size?: TextSizes, style?: RuleSet<object>) => RuleSet<object> = (type = 'p', size = 'medium', style) => {
  console.log({ style })

  return css`
    font-size: ${props => props.theme.fontThemes[type][size]}
    ${style}
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
  ${props => GetTextProperties(props.as, props.size, props.style)},
`
