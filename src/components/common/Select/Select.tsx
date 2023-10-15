import React, { type FC, useState } from 'react'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useTheme } from '@mui/material/styles'
import type { Option } from '@app/types'
import { SxProps } from '@mui/material'

type SelectProps = {
  label: string
  defaultValue?: string
  options: Option[]
  sxControl?: SxProps
}
export const CustomSelect: FC<SelectProps> = ({
  label,
  defaultValue = '',
  options,
  sxControl
}) => {
  const theme = useTheme()
  const [value, setValue] = useState(defaultValue ?? '')
  const handleChange = ({ target: { value } }: SelectChangeEvent) =>
    setValue(value)

  return (
    <FormControl fullWidth sx={sxControl}>
      <InputLabel id="select">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        onChange={handleChange}
        defaultValue={defaultValue}
        startAdornment={<PlaceOutlined color={'secondary'} />}
        IconComponent={KeyboardArrowDownOutlined}
        sx={{
          height: 40,
          'svg path': { fill: theme.palette.secondary.main }
        }}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
