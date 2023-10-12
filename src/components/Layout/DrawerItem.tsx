import React, { type FC } from 'react'
import * as MUIcon from '@mui/icons-material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import type { MenuItem } from './types'

type DrawerItemProps = {
  item: MenuItem
  open: boolean
}
const DrawerItem: FC<DrawerItemProps> = ({ item, open }) => {
  const { iconName, label } = item

  const Icon = iconName && MUIcon[iconName]

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5
        }}
      >
        {iconName && (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            {Icon && <Icon />}
          </ListItemIcon>
        )}
        <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerItem
