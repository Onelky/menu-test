import type { FC, PropsWithChildren, ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, type RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  )
}
// Overrides default render in order to wrap all the components inside Providers
const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'

export { customRender as render }
