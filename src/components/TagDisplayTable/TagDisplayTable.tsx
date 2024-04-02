import { Table, TableColumnsType, notification } from 'antd'
import { Key } from 'react'
import { useTagsQuery } from './useTagQuery/useTagsQuery'

import classes from './TagDisplayTable.module.css'

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

  console.log(data)

  return (
    <>
      {contextHolder}
      //TODO zrobić ilość wyświetlanych nad tabelą, a nie pod
      <Table
        className={classes.root}
        columns={columns}
        //use validation with ZOD narrow the type of data
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
