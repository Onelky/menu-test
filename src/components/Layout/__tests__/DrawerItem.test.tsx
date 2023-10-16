import userEvent from '@testing-library/user-event'
import {
  render,
  screen,
  waitFor
} from '../../../test-utils/testingLibraryUtils'
import DrawerItem from '../DrawerItem'

const commonProps = {
  open: false,
  isSelected: false,
  setSelectedItem: jest.fn(),
  setOpen: jest.fn()
}

test('item icon and text are rendered successfully', () => {
  render(
    <DrawerItem
      item={{ label: 'Providers', iconName: 'BadgeOutlined' }}
      {...commonProps}
    />
  )
  // expect(screen.getByText(/Providers/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Providers/i })).toBeInTheDocument()

  // check icon is rendered
  const icon = screen.getByTestId('BadgeOutlinedIcon')
  expect(icon).toBeInTheDocument()
})

test('sub-items are displayed when clicking an item name and hidden when clicking item again', async () => {
  const user = userEvent.setup()
  render(
    <DrawerItem
      item={{
        label: 'Providers',
        subItems: [{ label: 'Dashboard' }, { label: 'My Tasks' }]
      }}
      {...commonProps}
    />
  )
  const providersItem = screen.getByRole('button', { name: /Providers/i })
  await waitFor(async () => await user.click(providersItem))

  // check sub items are visible
  const dashboardSubItem = screen.getByRole('button', { name: 'Dashboard' })
  const myTasksSubItem = screen.getByRole('button', { name: 'My Tasks' })
  expect(dashboardSubItem).toBeInTheDocument()
  expect(myTasksSubItem).toBeInTheDocument()

  // check sub-items disappear when item is clicked again

  await waitFor(async () => {
    await user.click(providersItem)
    expect(dashboardSubItem).not.toBeInTheDocument()
  })
  expect(myTasksSubItem).not.toBeInTheDocument()
})

test('collapse/expand icon is only displayed when item has sub items', async () => {
  render(<DrawerItem item={{ label: 'Providers' }} {...commonProps} />)

  const icon = screen.queryByTestId('ExpandMoreIcon')
  expect(icon).not.toBeInTheDocument()
})
