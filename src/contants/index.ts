import { MenuItem } from '@app/types'

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
