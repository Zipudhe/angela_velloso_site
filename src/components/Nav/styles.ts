import styled from 'styled-components'

export const NavStyled = styled.nav`
  width: 100vw;
  position: absolute;
  height: 15vh;
  max-height: 100px;
  top: 0;
  background-color: black;
  opacity: 70%;

  display: flex;
`

export const LinksDivStyled = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 50%;
  }


  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:  center;
  justify-content: space-evenly;
`

export const LinkStyled = styled.a`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.2rem;
`

export const IconStyled = styled.div`
  width: 20%;
  height: 100%;
  background-color: red;

  @media screen and (max-width: 900px) {
    width: 50%;
  }
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  cursor: pointer;
`

export const MenuDiv = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  left: -10%;
  top: 100%;
  width: 100%;
  max-width: 200px;
  height: auto;
  overflow: hidden;
  background-color: black;
  transform: translateX(${props => props.isVisible ? '-10%' : '100%'});

  display: flex;
  flex-direction: column;

  transition: transform 0.25s linear;
`

export const LinksUl = styled.ul`
  @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }

  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  justify-content: space-evenly;
  gap: 1rem;
  list-style-type: none;

  > li {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &:focus {
    border: 1px solid green;
  }
`
