import { TableColumnsType, TableProps } from 'antd'
import {
  QueryParams,
  TagResponse,
  getTagsFromApi,
} from './getTagsFromApi/getTagsFromApi'
import { TableData } from '../TagDisplayTable'
import { useSearchParams } from 'react-router-dom'
import { SorterResult } from 'antd/es/table/interface'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

type Columns = TableColumnsType<TableData>

const API_URL = 'https://api.stackexchange.com/2.3/tags'

export const useTagsQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState<TagResponse['items']>([])

  const onChange: TableProps<TableData>['onChange'] = (
    pagination,
    _,
    extra
  ) => {
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

  const page = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('pagesize')) || 10
  const sort = searchParams.get('sort') || 'popular'
  const order = searchParams.get('order') || 'desc'

  useEffect(() => {
    getTagsFromApi({ page, pageSize, sort, order }).then((data) => {
      console.log('data', data)
      setData(data.items)
    })
  }, [page, pageSize, sort, order])

  return { onChange, data }
}
