import { ReactNode, FC, HTMLAttributes } from 'react'
import { styled, css, RuleSet } from 'styled-components'

type TextTypes = 'text' | 'title'
type TextSizes = 'small' | 'medium' | 'large'
type TextElements = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'

const BaseStyledTypograph = styled.p`
  color: red;
`

type TypographProps = {
  as?: TextElements,
  size?: TextSizes,
  props?: HTMLAttributes<HTMLElement>,
  children: ReactNode
}

const BaseTextStyle = css`
  color: #FFF;
  letter-spacing: 0.5rem;
  line-height: 155%;
`

const GetTextProperties: (type?: TextElements, size?: TextSizes) => RuleSet<object> = (type = 'p', size = 'medium') => {
  const textType: TextTypes = type.startsWith('h') ? 'title' : 'text'

  return css`
    font-size: ${props => props.theme[textType][size]}
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
  ${props => GetTextProperties(props.as, props.size)}
`
