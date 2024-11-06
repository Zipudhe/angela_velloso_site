import styled from 'styled-components'
import { TypographParagraph } from '../Typograph'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 15vw;
  height: fit-content;
  max-height: 350px;

  @media (max-width: 920px) {
    width: 50vw;
  }
`

export const CardImage = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 250px;

  aspect-ratio: 1 / 1;
  object-fit: cover;
`

export const CardTitle = styled(TypographParagraph)`
  text-align: center;
`
