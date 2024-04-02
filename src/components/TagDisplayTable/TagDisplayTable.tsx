import { Space, Table, TableColumnsType, TableProps } from 'antd'
import { Key } from 'react'
import { useSearchParams } from 'react-router-dom'
import { QueryParams, useTagsQuery } from './useTagQuery/useTagsQuery'

export type TableData = {
  key: Key
  name: string
  count: number
}

const columns: TableColumnsType<TableData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: true,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Count',
    dataIndex: 'count',
    showSorterTooltip: true,
    sorter: (a, b) => Number(a) - Number(b),
    sortDirections: ['descend', 'ascend'],
  },
]

const data: TableData[] = [
  {
    key: '1',
    name: 'Tag 1',
    count: 10,
  },
  {
    key: '2',
    name: 'Tag 2',
    count: 20,
  },
]

export const TagDisplayTable = () => {
  const { onChange, data } = useTagsQuery()

  console.log(data)

  return (
    <Space direction='vertical'>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ y: 240 }}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          total: 500,
        }}
      />
    </Space>
  )
}
