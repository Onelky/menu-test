import userEvent from '@testing-library/user-event'
import {
  render,
  screen,
  waitFor
} from '../../../test-utils/testingLibraryUtils'
import { Practices } from '../Practices'

test('rows are filtered based on search term (case insensitive)', async () => {
  const user = userEvent.setup()
  render(<Practices />)

  const searchBar = screen.getByPlaceholderText('Search')
  await waitFor(async () => {
    await user.clear(searchBar)
    await user.type(searchBar, 'Northside')
  })

  // find items that match search term
  expect(
    await screen.findAllByRole('cell', {
      name: /NORTHSIDE/i
    })
  ).toHaveLength(2)

  // check that there are no matches with an invalid search term
  await waitFor(async () => {
    await user.clear(searchBar)
    await user.type(searchBar, 'No match')
  })
  expect(
    screen.queryAllByRole('cell', {
      name: /No match/i
    })
  ).toHaveLength(0)
  expect(screen.getByText('No data found')).toBeInTheDocument()
})
