import { styled } from 'styled-components'

export const ShowsWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-evenly;

  @media(max-width: 900px) {
    overflow-x: scroll;
    scrollbar-width: none;
    gap: 1.5rem;
    justify-content: start;

    scroll-snap-type: x mandatory;

    > * {
      scroll-snap-align: center;
    }
  }
`
