import React, { type FC } from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import MuiTable from '@mui/material/Table'
import MuiTableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import type { Data, HeadCell } from './types'

interface TableHeadProps {
  numSelected: number
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  rowCount: number
  headCells: HeadCell[]
}

function TableHead(props: TableHeadProps) {
  const {
    onSelectAllClick,
    // order,
    // orderBy,
    numSelected,
    rowCount,
    headCells
    // onRequestSort
  } = props

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  )
}

type TableProps = {
  rows: Data[]
  headers: HeadCell[]
}
export const Table: FC<TableProps> = ({ rows, headers }) => {
  const [selected, setSelected] = React.useState<readonly number[]>([])

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const isSelected = (name: number) => selected.indexOf(name) !== -1

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  return (
    <TableContainer>
      <MuiTable
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
        size={'small'}
      >
        <TableHead
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={rows.length}
          headCells={headers}
        />
        <TableBody>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(row.id)
            const labelId = `table-checkbox-${index}`

            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={labelId}
                  scope="row"
                  padding="none"
                >
                  {row.place}
                </TableCell>
                <TableCell align="right">({row.jobs})</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
