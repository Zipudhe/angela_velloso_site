import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
