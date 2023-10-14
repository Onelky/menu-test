import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { SearchBar } from '../common/SearchBar'
import { CustomSelect } from '../common/Select'
import { Table } from '../../components/common/Table'

// todo: add filter icon with notification
// todo: create common table
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
      <Table
        rows={[{ id: 1, jobs: 4, place: 'k' }]}
        headers={[{ label: 'Jobs', id: 1 }]}
      />
    </Stack>
  )
}
