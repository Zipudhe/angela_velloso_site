import styled from "styled-components";
import { LinkStyled } from '../Nav/styles'


export const ContactDiv = styled.div`
  height: 100%;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 500px;

  gap: 32px;
`

export const ContactLink = styled(LinkStyled)`
  font-size: 1.5rem;
  align-content: center;

  display: flex;
  align-items: center;

  >:first-child {
      margin-right: 2rem;
  }
`
