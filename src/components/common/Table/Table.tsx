import React, { type FC } from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import MuiTable from '@mui/material/Table'
import MuiTableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import { Theme, useTheme } from '@mui/material/styles'
import type { HeadCell } from './types'
import Box from '@mui/material/Box'

const checkboxCommonStyles = (theme: Theme) => ({
  color: theme.palette.secondary.main,
  paddingX: 0
})

const formatCellValue = (cellValue: string, isNumeric: boolean): string => {
  if (isNumeric) return '(' + cellValue + ')'
  return cellValue
}

interface TableHeadProps {
  numSelected: number
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  rowCount: number
  headCells: HeadCell[]
}

function TableHead(props: TableHeadProps) {
  const { onSelectAllClick, numSelected, rowCount, headCells } = props
  const theme = useTheme()

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell
          component={'th'}
          scope={'col'}
          padding="none"
          aria-label={'Select All checkbox'}
          width={5}
        >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={checkboxCommonStyles(theme)}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            scope={'col'}
            component={'th'}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  )
}

type TableProps = {
  rows: any[]
  headers: HeadCell[]
}
export const Table: FC<TableProps> = ({ rows, headers }) => {
  const theme = useTheme()
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

  if (!rows.length)
    return (
      <Box
        width={'100%'}
        height={'50vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ color: theme.customColors.darkGray }}
      >
        No data found
      </Box>
    )

  return (
    <TableContainer
      sx={{
        maxHeight: {
          xs: 'calc(100vh - 50px)',
          md: 'calc(90vh - 90px - 50px)'
        },
        overflowY: 'auto',
        '::-webkit-scrollbar': {
          width: 8,
          background: theme.customColors.grayBlue,
          borderRadius: '8px'
        },
        '::-webkit-scrollbar-thumb': {
          background: theme.customColors.scrollBar,
          borderRadius: '8px'
        }
      }}
    >
      <MuiTable
        sx={{ minWidth: { xs: 200, md: 750 } }}
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
                <TableCell
                  padding="none"
                  aria-label={'Select row checkbox'}
                  width={5}
                >
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    sx={checkboxCommonStyles(theme)}
                    inputProps={{
                      'aria-labelledby': labelId
                    }}
                  />
                </TableCell>
                {headers.map((header) => (
                  <TableCell
                    key={header.id + row.id}
                    scope="row"
                    align={header.numeric ? 'right' : 'left'}
                    sx={{
                      color: header.numeric
                        ? theme.customColors.grayGreen
                        : theme.customColors.darkGray
                    }}
                  >
                    {formatCellValue(row[header.columnPath], !!header.numeric)}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
