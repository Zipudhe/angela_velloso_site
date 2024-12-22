import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 2rem;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  align-items: center;
  
  h2 {
    margin-bottom: 1rem;
  }

  @media(max-width: 900px) {
    padding: 2rem 0;
  }
`
