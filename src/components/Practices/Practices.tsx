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
    <Box gridRow={{ xs: 2, md: 1 }} gridColumn={{ md: 3 }}>
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
        gridTemplateRows={{ xs: '1fr 1fr', md: 'unset' }}
        gridTemplateColumns={{
          xs: '1fr minmax(0, max-content)',
          md: '1fr 1fr minmax(0, max-content)'
        }}
        columnGap={'15px'}
        rowGap={'15px'}
        alignItems={'center'}
      >
        <CustomSelect
          label={'Display By'}
          defaultValue={'practice'}
          sxControl={{ gridColumn: { xs: '1 / 3', md: 'unset' } }}
          options={[
            { label: 'Practice', value: 'practice' },
            { label: 'Other', value: 'other' }
          ]}
        />
        <SearchBar
          value={search}
          setValue={setSearch}
          placeholder={'Search'}
          sx={{ gridRow: { xs: 2, md: 1 } }}
        />
        <Filter />
      </Box>
      <PracticesTable search={search} />
    </Stack>
  )
}
