import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { SearchBar } from '../common/SearchBar'
import { CustomSelect } from '../common/Select'

export const Practices = () => {
  const [value, setValue] = useState('')
  return (
    <Stack>
      <CustomSelect
        label={'Display By'}
        defaultValue={'practice'}
        options={[
          { label: 'Practice', value: 'practice' },
          { label: 'Other', value: 'other' }
        ]}
      />
      <SearchBar value={value} setValue={setValue} placeholder={'Search'} />
    </Stack>
  )
}
