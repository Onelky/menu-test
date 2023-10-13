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

type DrawerItemProps = {
  item: MenuItem
  open: boolean
}
const DrawerItem: FC<DrawerItemProps> = ({ item, open: isDrawerOpen }) => {
  const { iconName, label, subItems } = item
  const [openSubmenu, setOpenSubmenu] = useState(false)
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
            px: 2.5
          }}
        >
          {iconName && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isDrawerOpen ? 3 : 'auto',
                justifyContent: 'center'
              }}
            >
              {Icon && <Icon />}
            </ListItemIcon>
          )}
          <ListItemText
            primary={label.toUpperCase()}
            sx={{ opacity: isDrawerOpen ? 1 : 0 }}
          />

          {collapseIcon}
        </ListItemButton>
      </ListItem>

      {subItemsComponent}
    </>
  )
}

export default DrawerItem
