import { TableColumnsType, TableProps } from 'antd'
import { QueryParams } from './getTagsFromApi/getTagsFromApi'
import { TableData } from '../TagDisplayTable'
import { useSearchParams } from 'react-router-dom'
import { SorterResult } from 'antd/es/table/interface'

type Columns = TableColumnsType<TableData>

export const useTagsQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const onChange: TableProps<TableData>['onChange'] = (
    pagination,
    sorter,
    extra
  ) => {
    console.log('params', pagination, sorter, extra)
    console.log('sorter', sorter)

    let sort: QueryParams['sort'] = 'popular'

    let order: QueryParams['order'] = 'desc'

    //I had to use type assertion here because the type of sorter is not inferred correctly or I am not able to infer it correctly i typed it as shown in Antd documentation
    if ((extra as SorterResult<TableData>).field === 'name') {
      sort = 'name'
    }

    if ((extra as SorterResult<TableData>).field === 'count') {
      sort = 'popular'
    }

    if ((extra as SorterResult<TableData>).order === 'ascend') {
      order = 'asc'
    }

    if ((extra as SorterResult<TableData>).order === 'descend') {
      order = 'desc'
    }

    setSearchParams({
      page: pagination.current?.toString() ?? '1',
      pagesize: pagination.pageSize?.toString() ?? '10',
      sort: sort,
      order: order,
    })
  }

  const columns: Columns

  return { onChange, columns }
}
