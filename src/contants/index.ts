import { MenuItem } from '@app/types'

export const menuItems: MenuItem[] = [
  { label: 'Dashboard', iconName: 'BarChartOutlined', route: '/' },
  {
    label: 'Providers',
    route: 'providers',
    iconName: 'BadgeOutlined',
    subItems: [
      { label: 'Dashboard', route: 'dashboard' },
      { label: 'Providers', route: 'providers' },
      { label: 'My Tasks', route: 'my-tasks' },
      { label: 'All Tasks', route: 'all-tasks' },
      { label: 'Roster', route: 'roster' },
      { label: 'Privileges', route: 'privileges' },
      { label: 'Credentialing', route: 'credentialing' },
      { label: 'State Laws', route: 'stateLaws' }
    ]
  },
  { label: 'Practices', iconName: 'LocationOnOutlined', route: 'practices' },
  { label: 'Jobs', iconName: 'WorkOutlineOutlined', route: 'jobs' },
  { label: 'Schedules', iconName: 'CalendarTodayOutlined', route: 'schedules' },
  {
    label: 'Time & Invoices',
    iconName: 'MoreTimeOutlined',
    route: 'time-and-invoices'
  },
  { label: 'Time & Pay', iconName: 'PaidOutlined', route: 'time-and-pay' },
  {
    label: 'Messages',
    iconName: 'ChatBubbleOutlineOutlined',
    route: 'messages'
  }
]
