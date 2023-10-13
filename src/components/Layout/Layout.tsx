import React, { type FC, type PropsWithChildren } from 'react'
import { useTheme, darken } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Drawer, DrawerHeader } from './styledComponents'
import { menuItems } from './types'
import DrawerItem from './DrawerItem'

// todo: add logo

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>Logo</DrawerHeader>

        <List>
          {menuItems.map((item) => (
            <DrawerItem
              key={item.label}
              item={item}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={toggleOpen}
        aria-label={(open ? 'open' : 'close') + ' drawer'}
        edge="end"
        sx={{
          height: 25,
          width: 25,
          zIndex: 3000,
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
          position: 'absolute',
          left: open ? 240 : 60,
          top: 24,
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: darken(theme.palette.secondary.main, 0.1)
          }
        }}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
