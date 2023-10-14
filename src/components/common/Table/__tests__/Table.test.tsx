import { render, screen } from '@testing-library/react'
import { Table } from '../Table'

test('displays headers and rows correctly', () => {
  render(
    <Table
      headers={[{ id: 1, label: 'Header 1' }]}
      rows={[{ id: 1, place: 'Place', jobs: 40 }]}
    />
  )
  expect(screen.getByRole('row', { name: 'Header 1' })).toBeInTheDocument()

  expect(screen.getByRole('cell', { name: /Place/i })).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: '(40)' })).toBeInTheDocument()
})
