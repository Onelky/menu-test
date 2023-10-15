import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { SearchBar } from '../common/SearchBar'
import { CustomSelect } from '../common/Select'
import PracticesTable from '@app/components/Practices/PracticesTable'

// todo: add filter icon with notification
// todo add search functionality
export const Practices = () => {
  const [search, setSearch] = useState('')
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
      <SearchBar value={search} setValue={setSearch} placeholder={'Search'} />
      <PracticesTable search={search} />
    </Stack>
  )
}
