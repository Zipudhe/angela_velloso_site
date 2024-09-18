import React, { FC, HtmlHTMLAttributes } from "react";
import { StyledBurger } from './styles'

export interface IMenuButton extends HtmlHTMLAttributes<HTMLElement> {
  open?: boolean
}

export const MenuButton: FC<IMenuButton> = ({ open = false, ...props }) => {

  return (
    <StyledBurger open={open} {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
