import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  max-width: 2000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  >h1 {
    margin: 32px 0;
  }
`

export const ShowsWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-evenly;
`
