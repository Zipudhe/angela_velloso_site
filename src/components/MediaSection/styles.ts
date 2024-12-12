import styled from 'styled-components'

export const IconsWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 38px;

  min-height: 50px;
  height: fit-content;
  max-height: 75px;
  width: 100%;

  margin: 1rem 0;

  img {
    width: 40px;
  }

  @media(max-width: 900px) {
    display: grid;
    place-items: center;
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, minmax(0, 50px));
  
    max-height: min-content;
  }
`
