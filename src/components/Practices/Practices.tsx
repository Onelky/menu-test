import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import FilterListOutlined from '@mui/icons-material/FilterListOutlined'
import { SearchBar } from '../common/SearchBar'
import { CustomSelect } from '../common/Select'
import PracticesTable from './PracticesTable'

const Filter = () => {
  return (
    <Box>
      <Badge badgeContent={1} color="secondary">
        <FilterListOutlined color={'secondary'} />
      </Badge>
    </Box>
  )
}
export const Practices = () => {
  const [search, setSearch] = useState('')
  return (
    <Stack rowGap={'20px'}>
      <Box
        display={'grid'}
        gridTemplateColumns={{ lg: '1fr 1fr minmax(0, max-content)' }}
        columnGap={'15px'}
        alignItems={'center'}
      >
        <CustomSelect
          label={'Display By'}
          defaultValue={'practice'}
          options={[
            { label: 'Practice', value: 'practice' },
            { label: 'Other', value: 'other' }
          ]}
        />
        <SearchBar value={search} setValue={setSearch} placeholder={'Search'} />
        <Filter />
      </Box>
      <PracticesTable search={search} />
    </Stack>
  )
}
