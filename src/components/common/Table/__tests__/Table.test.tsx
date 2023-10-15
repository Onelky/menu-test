import { render, screen } from '@testing-library/react'
import { Table } from '../Table'

test('displays headers and rows correctly', () => {
  render(
    <Table
      headers={[
        { id: 1, label: 'Place', columnPath: 'place' },
        { id: 2, label: 'Jobs', columnPath: 'jobs', numeric: true }
      ]}
      rows={[{ id: 1, place: 'Better Medicine Testing', jobs: 40 }]}
    />
  )
  // check headers
  expect(
    screen.getByRole('columnheader', { name: 'Place' })
  ).toBeInTheDocument()
  expect(screen.getByRole('columnheader', { name: 'Jobs' })).toBeInTheDocument()

  // check row content is right
  expect(
    screen.getByRole('cell', { name: /Better Medicine Testing/i })
  ).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: '(40)' })).toBeInTheDocument()
})
