import { styled } from 'styled-components'

export const Card = styled.div`
  width: 20vw;
  max-width: 400px;

  height: min-content;
  min-height: 500px;
  max-height: 620px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;

  background-color: ${props => props.theme.main.contrast};


  hr {
    width: 80%;
    color: ${props => props.theme.main.terceary_bg};
  }
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin: 0;
  }

  :nth-child(2) {
    margin-top: 1rem;
  }
`
