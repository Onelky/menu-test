import * as MUIcon from '@mui/icons-material'

export type MenuItem = {
  label: string
  iconName?: keyof typeof MUIcon
  subItems?: MenuItem[]
}

export const defaultSelectedItem: MenuItem = {
  label: 'Providers',
  iconName: 'BadgeOutlined',
  subItems: [
    { label: 'Dashboard' },
    { label: 'Providers' },
    { label: 'My Tasks' },
    { label: 'All Tasks' },
    { label: 'Roster' },
    { label: 'Privileges' },
    { label: 'Credentialing' },
    { label: 'State Laws' }
  ]
}

export const menuItems: MenuItem[] = [
  { label: 'Dashboard', iconName: 'BarChartOutlined' },
  defaultSelectedItem,
  { label: 'Practices', iconName: 'LocationOnOutlined' },
  { label: 'Jobs', iconName: 'WorkOutlineOutlined' },
  { label: 'Schedules', iconName: 'CalendarTodayOutlined' },
  { label: 'Time & Invoices', iconName: 'MoreTimeOutlined' },
  { label: 'Time & Pay', iconName: 'PaidOutlined' },
  { label: 'Messages', iconName: 'ChatBubbleOutlineOutlined' }
]
