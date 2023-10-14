import React from 'react'
import { Stack } from '@mui/material'
import { CustomSelect } from '../common/Select'

export const Practices = () => {
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
    </Stack>
  )
}
