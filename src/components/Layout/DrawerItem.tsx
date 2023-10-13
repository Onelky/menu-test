import React, { type FC, useEffect, useState } from 'react'
import * as MUIcon from '@mui/icons-material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import { useTheme } from '@mui/material/styles'
import { DrawerSubItemList } from './styledComponents'
import type { MenuItem } from './types'

type DrawerItemProps = {
  item: MenuItem
  open: boolean
  setOpen: (value: boolean) => void
}
const DrawerItem: FC<DrawerItemProps> = (props) => {
  const theme = useTheme()
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const { item, open: isDrawerOpen, setOpen: setOpenDrawer } = props
  const { iconName, label, subItems } = item
  const hasSubItems = !!subItems?.length

  const Icon = iconName && MUIcon[iconName]

  useEffect(() => {
    if (!isDrawerOpen && openSubmenu) setOpenSubmenu(false)
  }, [isDrawerOpen])

  const handleItemClick = () => {
    if (hasSubItems && !openSubmenu) {
      setOpenDrawer(true)
    }
    setOpenSubmenu(!openSubmenu)
  }
  const CollapseIcon = hasSubItems && (openSubmenu ? ExpandLess : ExpandMore)

  const itemHoverStyle = {
    ':hover': {
      backgroundColor: 'transparent',
      '& .MuiTypography-root': {
        color: theme.customColors.lightBlue
      },
      '& svg': {
        fill: theme.customColors.lightBlue
      }
    }
  }

  const icon = iconName && (
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
  )

  const subItemsList = hasSubItems && (
    <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
      <DrawerSubItemList disablePadding>
        {subItems.map(({ label }) => (
          <ListItemButton key={label} sx={{ pl: 4, ...itemHoverStyle }}>
            <ListItemText
              primary={label}
              sx={{ fontWeight: 300, color: theme.customColors.lightGray }}
            />
          </ListItemButton>
        ))}
      </DrawerSubItemList>
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
            px: isDrawerOpen ? 0 : 'auto',
            ...itemHoverStyle
          }}
        >
          {icon}

          {isDrawerOpen && (
            <>
              <ListItemText
                primary={label.toUpperCase()}
                sx={{
                  opacity: isDrawerOpen ? 1 : 0,
                  fontSize: { lg: 14 },
                  color: 'white',
                  span: {
                    letterSpacing: '1.5px',
                    fontSize: { lg: 14 },
                    fontWeight: 300 // todo: change when selected
                  }
                }}
              />

              {CollapseIcon && <CollapseIcon sx={{ color: 'white' }} />}
            </>
          )}
        </ListItemButton>
      </ListItem>

      {subItemsList}
    </>
  )
}

export default DrawerItem
