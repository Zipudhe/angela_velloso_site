import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

interface IApplicationTheme {
  children: React.ReactNode
}

/*
 * h3 -> small: 16px | medium: 18px | large: 24px
 * h2 -> small: 24px | medium: 32px | large 40px
 * h1 -> small: 40px | medium: 48px | large: 56px
 */

export const ApplicationTheme: FC<IApplicationTheme> = ({ children }) => {

  // Input:  tag + size | Example p + medium
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

  const fontThemes = {
    p,
    h1,
    h2,
    h3
  }


  const theme = {
    fontThemes,
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )

}
