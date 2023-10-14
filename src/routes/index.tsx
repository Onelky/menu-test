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
          element: <></>
        },
        {
          path: 'all-tasks',
          element: <></>
        },
        {
          path: 'roster',
          element: <></>
        },
        {
          path: 'privileges',
          element: <></>
        },
        {
          path: 'credentialing',
          element: <></>
        },
        {
          path: 'stateLaws',
          element: <></>
        }
      ]
    },
    { path: 'practices', element: <></> },
    { path: 'jobs', element: <></> },
    { path: 'schedules', element: <></> },
    { path: 'time-and-invoices', element: <></> },
    { path: 'time-and-pay', element: <></> },
    { path: 'messages', element: <></> }
  ])

  return <Layout>{element}</Layout>
}
