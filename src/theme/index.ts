import { createTheme } from '@mui/material/styles'

type CustomColors = {
  whiteText: string
  darkGray: string
  lightGray: string
  scrollBar: string
  lightBlue: string
}

const customColors: CustomColors = {
  whiteText: '#abc3d0',
  darkGray: '#7b8f9d',
  lightGray: '#cedce0',
  scrollBar: '#4b7a98',
  lightBlue: '#3599C8'
}

const theme = createTheme({
  customColors,
  palette: {
    primary: {
      main: '#0a4d7a'
    },
    secondary: {
      main: '#01a6a0'
    }
  }
})

declare module '@mui/material/styles' {
  interface Theme {
    customColors: CustomColors
  }
  interface ThemeOptions {
    customColors: CustomColors
  }
}

export default theme
