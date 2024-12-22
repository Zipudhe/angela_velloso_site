"use client"

import React, { useEffect, useState } from "react";
import {
  NavStyled,
  LinksDivStyled,
  LinkStyled,
  LinksUl,
  IconStyled,
  MenuWrapper,
  MenuDiv
} from './styles'
import { MenuButton } from '../MenuButton/MenuButton'

import { useMobile } from '../../hooks/Responsiviness'

export const Nav = (): React.ReactNode => {
  const isMobile = useMobile()


  return (
    <NavStyled>
      <LinksDivStyled>
        {isMobile ?
          <MobileLinks />
          :
          <DesktopLinks />
        }
      </LinksDivStyled>
      <IconStyled />
    </NavStyled>
  )
}


const DesktopLinks = () => {

  return (
    <Links />
  )
}


const MobileLinks = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const bodyElement: HTMLElement | null = window.document.querySelector('body')
    const handleBodyClick = () => {
      setShowMenu(false)
    }

    bodyElement && bodyElement.addEventListener('click', handleBodyClick)

    return () => {
      bodyElement && bodyElement.removeEventListener('click', handleBodyClick)
    }
  }, [])

  const toggleMenu = () => {
    setShowMenu((prevValue) => !prevValue)
  }

  return (
    <MenuWrapper
      onClick={toggleMenu}
    >
      <MenuButton open={showMenu} />
      <MenuDiv isVisible={showMenu} >
        <Links toggleMenu={toggleMenu} />
      </MenuDiv>
    </MenuWrapper>
  )
}

const Links = (props: { toggleMenu?: () => void }) => {
  return (
    <LinksUl>
      <li>
        <LinkStyled onClick={props.toggleMenu} href="#sobre" rel="noopener"> Sobre </LinkStyled>
      </li>
      <li>
        <LinkStyled onClick={props.toggleMenu} href="#release" > Lançamentos </LinkStyled>
      </li>
      <li>
        <LinkStyled onClick={props.toggleMenu} href="#shows" > Shows </LinkStyled>
      </li>
      <li>
        <LinkStyled onClick={props.toggleMenu} href="#contatos" > Contato </LinkStyled>
      </li>
    </LinksUl>
  )
}

