import { Table, TableColumnsType, notification } from 'antd'
import { Key } from 'react'
import { useTagsQuery } from './useTagQuery/useTagsQuery'

import classes from './TagDisplayTable.module.css'
import { Tag } from './useTagQuery/tagsSchema'

export type TableData = {
  key: Key
} & Tag

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

export const TagDisplayTable = () => {
  const { onChange, data, error, isLoading } = useTagsQuery()

  const [api, contextHolder] = notification.useNotification()

  if (error) {
    api.error({
      key: 'table-error',
      message: 'Error',
      description: 'An error occurred while downloading new data.',
      duration: 0,
    })
  }

  if (!error) {
    api.destroy('table-error')
  }

  return (
    <>
      {contextHolder}
      <Table
        className={classes.root}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        loading={isLoading || !data}
        scroll={{ y: 240 }}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          total: 500,
        }}
      />
    </>
  )
}
