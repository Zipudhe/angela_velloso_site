import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

interface IApplicationTheme {
  children: React.ReactNode
}

export const ApplicationTheme: FC<IApplicationTheme> = ({ children }) => {
  const text = {
    small: "12px",
    medium: "18px",
    large: "24px",
  }

  const title = {
    small: "24px",
    medium: "32px",
    large: "40px",
  }

  const theme = {
    text,
    title,
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )

}
