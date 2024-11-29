import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

interface IApplicationTheme {
  children: React.ReactNode
}

export const ApplicationTheme: FC<IApplicationTheme> = ({ children }) => {

  const fontSizes = {
    small: '16px;',
    medium: '18px;',
    mediumLarge: '24px;',
    large: '32px;',
    xlarge: '40px;',
    xxlarge: '44px;'
  }

  const p = {
    small: fontSizes.small,
    medium: fontSizes.medium,
    large: fontSizes.mediumLarge,
  }

  const h1 = {
    small: fontSizes.large,
    medium: fontSizes.xlarge,
    large: fontSizes.xxlarge,
  }

  const h2 = {
    small: fontSizes.mediumLarge,
    medium: fontSizes.large,
    large: fontSizes.xlarge,
  }

  const h3 = {
    small: fontSizes.medium,
    medium: fontSizes.mediumLarge,
    large: fontSizes.large,
  }

  const typography = {
    p,
    h1,
    h2,
    h3
  }

  const colors = {
    main: '#1B0000',
    secondary: '#CFC6A3',
    terceary: '#0593DD'
  }

  const main = {
    main_bg: colors.main,
    secondary_bg: colors.secondary,
    terceary_bg: colors.terceary,
    on_main: colors.secondary,
    on_secondary: '#000',
  }


  const theme = {
    typography,
    main
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
