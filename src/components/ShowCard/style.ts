import { styled } from 'styled-components'

export const Card = styled.div`
  width: 20vw;
  max-width: 400px;

  height: fit-content;
  min-height: 400px;
  max-height: 520px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;

  padding: 32px 16px;
  background-color: #5F5F5F;
  gap: 12px;


  hr {
    width: 80%;
    color: #0593DD;
  }
`

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  padding: 4px;
`
