import { Practices } from '../components/Practices'
import { useRoutes } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const AppRoutes = () => {
  let element = useRoutes([
    { path: '/', element: <h2>Dashboard</h2> },
    {
      path: '/providers',
      children: [
        {
          path: 'dashboard',
          element: <h2>Dashboard</h2>
        },
        {
          path: 'providers',
          element: <h2>Providers</h2>
        },
        {
          path: 'my-tasks',
          element: <h2>My Tasks</h2>
        },
        {
          path: 'all-tasks',
          element: <h2>All tasks</h2>
        },
        {
          path: 'roster',
          element: <h2>Roster</h2>
        },
        {
          path: 'privileges',
          element: <h2>Privileges</h2>
        },
        {
          path: 'credentialing',
          element: <h2>Credentialing</h2>
        },
        {
          path: 'stateLaws',
          element: <h2>State Laws</h2>
        }
      ]
    },
    { path: 'practices', element: <Practices /> },
    { path: 'jobs', element: <h2>Jobs</h2> },
    { path: 'schedules', element: <h2>Schedules</h2> },
    { path: 'time-and-invoices', element: <h2>Invoices</h2> },
    { path: 'time-and-pay', element: <h2>Pay</h2> },
    { path: 'messages', element: <h2>Messages</h2> },
    { path: 'settings', element: <h2>Settings</h2> },
    { path: 'help', element: <h2>Help</h2> }
  ])

  return <Layout>{element}</Layout>
}
