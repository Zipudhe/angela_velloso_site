import styled from 'styled-components'

export const MainSection = styled.section`
  width: 100%;
  height: fit-content;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const CardWrapper = styled.div`
  min-height: 300px;
  width: 100%;
  
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
`
