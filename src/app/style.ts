import { styled } from 'styled-components'

export const StyledMain = styled.main`
  padding: 0 2rem;
  width: 100%;
  max-width: 2000px;
  min-height: 100vh;

  background-color: ${props => props.theme.main.main_bg};
`
