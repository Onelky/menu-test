import React, { type FC } from 'react'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { SxProps } from '@mui/material'

type SelectProps = {
  value: string
  placeholder: string
  setValue: (newValue: string) => void
  sx?: SxProps
}
export const SearchBar: FC<SelectProps> = (props) => {
  const { placeholder, value = '', setValue, sx } = props

  return (
    <FormControl fullWidth sx={sx}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        InputProps={{
          sx: { height: 40 },
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined color={'secondary'} />
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  )
}
