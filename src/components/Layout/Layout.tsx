import React, {
  type FC,
  type PropsWithChildren,
  useEffect,
  useState
} from 'react'
import { darken, styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import IconButton, { type IconButtonProps } from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { menuItems } from '../../contants'
import { Drawer, DrawerHeader } from './styledComponents'
import DrawerItem from './DrawerItem'
import { useMediaQuery } from '@mui/material'

// todo: add logo

const ToggleSideBarButton = styled(IconButton, {
  shouldForwardProp: (propName) => propName !== 'open'
})<IconButtonProps & { open: boolean }>(({ theme, open }) => ({
  height: 25,
  width: 25,
  zIndex: 3000,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  position: 'absolute',
  left: open ? 240 : 60,
  top: 24,
  transition: theme.transitions.create('left', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.1)
  }
}))

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true)
  const [selectedItem, setSelectedItem] = useState<string>('Dashboard')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    if (isMobile) setOpen(false)
    else setOpen(true)
  }, [isMobile])

  const toggleOpen = () => setOpen(!open)

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
              isSelected={selectedItem === item.label}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </List>
      </Drawer>
      <ToggleSideBarButton
        onClick={toggleOpen}
        aria-label={(open ? 'open' : 'close') + ' drawer'}
        edge="end"
        open={open}
        sx={{ display: { xs: 'none', lg: 'flex' } }}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </ToggleSideBarButton>
      <Box component="main" sx={{ flexGrow: 1, p: '90px 30px 30px 30px' }}>
        {children}
      </Box>
    </Box>
  )
}
