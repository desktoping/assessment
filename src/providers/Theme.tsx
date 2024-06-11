import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { FC } from 'react'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={{}}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
