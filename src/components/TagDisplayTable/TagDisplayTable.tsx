import { Space, Table } from 'antd'
import { ElementsPerPageForm } from './ElementsPerPageForm/ElementsPerPageForm'

export const TagDisplayTable = () => {
  return (
    <Space direction='vertical'>
      <ElementsPerPageForm />
      <Table />
    </Space>
  )
}
