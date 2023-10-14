import React, { type FC, PropsWithChildren, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as MUIcon from '@mui/icons-material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import { useTheme } from '@mui/material/styles'
import type { MenuItem } from '@app/types'
import { DrawerSubItemList } from './styledComponents'

const Wrapper: FC<PropsWithChildren<{ route?: string }>> = ({
  children,
  route
}) => {
  if (route)
    return (
      <NavLink
        to={route}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        {children}
      </NavLink>
    )
  return <>{children}</>
}

type DrawerItemProps = {
  item: MenuItem
  open: boolean
  isSelected: boolean
  setOpen: (value: boolean) => void
  setSelectedItem: (label: string) => void
}
const DrawerItem: FC<DrawerItemProps> = (props) => {
  const {
    item,
    open: isDrawerOpen,
    setOpen: setOpenDrawer,
    isSelected,
    setSelectedItem
  } = props

  const theme = useTheme()
  const [openSubmenu, setOpenSubmenu] = useState(isSelected)

  const { iconName, label, subItems, route } = item
  const hasSubItems = !!subItems?.length
  const Icon = iconName && MUIcon[iconName]

  useEffect(() => {
    if ((!isDrawerOpen || !isSelected) && openSubmenu) setOpenSubmenu(false)
  }, [isDrawerOpen, isSelected])

  const handleItemClick = () => {
    setSelectedItem(label)
    setOpenSubmenu(!openSubmenu)
    if (hasSubItems && !openSubmenu) setOpenDrawer(true)
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
        mr: isDrawerOpen ? 2 : 0,
        justifyContent: 'center'
      }}
    >
      {Icon && (
        <Icon
          sx={{
            fontSize: 20,
            color: isSelected
              ? theme.customColors.lightBlue
              : isDrawerOpen
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
          <ListItemButton key={label} sx={{ ...itemHoverStyle }}>
            <ListItemText
              primary={label}
              sx={{ fontWeight: 300, color: theme.customColors.lightGray }}
            />
          </ListItemButton>
        ))}
      </DrawerSubItemList>
    </Collapse>
  )

  const text = isDrawerOpen && (
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
            fontWeight: 300
          }
        }}
      />

      {CollapseIcon && <CollapseIcon sx={{ color: 'white' }} />}
    </>
  )

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          display: 'block',
          fontWeight: openSubmenu ? 'bold' : undefined,
          color: openSubmenu ? 'text.primary' : 'inherit',
          a: {
            textDecoration: 'none'
          },
          '& .active': {
            span: {
              fontWeight: 600
            }
          }
        }}
      >
        <Wrapper route={hasSubItems ? '' : route}>
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
            {text}
          </ListItemButton>
        </Wrapper>
      </ListItem>

      {subItemsList}
    </>
  )
}

export default DrawerItem
