import React, { type FC } from 'react'
import { Table } from '@app/components/common/Table'
import data from '@app/server/data.json'

type PracticesTableProps = {
  search: string
}
const PracticesTable: FC<PracticesTableProps> = ({ search }) => {
  return (
    <Table
      rows={data.data}
      headers={[
        { label: 'All', id: 1, columnPath: 'place' },
        { label: 'Jobs', id: 2, numeric: true, columnPath: 'jobs' }
      ]}
    />
  )
}

export default PracticesTable
