import React, { type FC, useState } from 'react'
import * as MUIcon from '@mui/icons-material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import type { MenuItem } from './types'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import { useTheme } from '@mui/material/styles'

type DrawerItemProps = {
  item: MenuItem
  open: boolean
}
const DrawerItem: FC<DrawerItemProps> = ({ item, open: isDrawerOpen }) => {
  const theme = useTheme()
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const { iconName, label, subItems } = item
  const hasSubItems = !!subItems?.length

  const Icon = iconName && MUIcon[iconName]

  const handleItemClick = () => {
    setOpenSubmenu(!openSubmenu)
  }
  const collapseIcon = hasSubItems && (
    <>{openSubmenu ? <ExpandLess /> : <ExpandMore />}</>
  )

  const subItemsComponent = hasSubItems && (
    <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
      <List
        component="div"
        disablePadding
        sx={{ maxHeight: 150, overflowY: 'auto' }}
      >
        {subItems.map(({ label }) => (
          <ListItemButton key={label} sx={{ pl: 4 }}>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  )

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          display: 'block',
          fontWeight: openSubmenu ? 'bold' : undefined,
          color: openSubmenu ? 'text.primary' : 'inherit'
        }}
      >
        <ListItemButton
          onClick={handleItemClick}
          sx={{
            minHeight: 48,
            justifyContent: isDrawerOpen ? 'initial' : 'center',
            px: 2.5,
            ':hover': {
              backgroundColor: 'transparent',
              '& .MuiTypography-root': {
                color: theme.customColors.lightBlue
              },
              '& svg': {
                fill: theme.customColors.lightBlue
              }
            }
          }}
        >
          {iconName && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isDrawerOpen ? 2 : 'auto',
                justifyContent: 'center'
              }}
            >
              {Icon && (
                <Icon
                  sx={{
                    fontSize: 20,
                    color: isDrawerOpen
                      ? theme.palette.secondary.main
                      : theme.palette.common.white
                  }}
                />
              )}
            </ListItemIcon>
          )}
          <ListItemText
            primary={label.toUpperCase()}
            sx={{
              opacity: isDrawerOpen ? 1 : 0,
              fontSize: { lg: 14 },
              color: 'white',
              fontWeight: 300, // todo: change when selected
              span: {
                letterSpacing: '1.5px'
              }
            }}
          />

          {collapseIcon}
        </ListItemButton>
      </ListItem>

      {subItemsComponent}
    </>
  )
}

export default DrawerItem
