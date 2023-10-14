import React, { type FC } from 'react'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchOutlined from '@mui/icons-material/SearchOutlined'

type SelectProps = {
  value: string
  placeholder: string
  setValue: (newValue: string) => void
}
export const SearchBar: FC<SelectProps> = (props) => {
  const { placeholder, value = '', setValue } = props

  return (
    <FormControl fullWidth>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined color={'secondary'} />
            </InputAdornment>
          )
        }}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </FormControl>
  )
}
