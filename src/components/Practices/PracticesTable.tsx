import React, { type FC, useEffect, useState } from 'react'
import { Table } from '../../components/common/Table'
import data from '../../server/data.json'

type PracticesTableProps = {
  search: string
}

const PracticesTable: FC<PracticesTableProps> = ({ search }) => {
  const [rows, setRows] = useState(data.data)

  useEffect(() => {
    setRows(
      data.data.filter((item) =>
        item.place.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search])

  return (
    <Table
      rows={rows}
      headers={[
        { label: 'All', id: 1, columnPath: 'place' },
        { label: 'Jobs', id: 2, numeric: true, columnPath: 'jobs' }
      ]}
    />
  )
}

export default PracticesTable
