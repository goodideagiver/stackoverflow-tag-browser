import { TableProps } from 'antd'
import { SorterResult } from 'antd/es/table/interface'
import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import { TableData } from '../TagDisplayTable'
import { API_URL, DEFAULT_SEARCH_PARAMS } from './constants'
import { fetcher } from './fetcher'
import { objectToQueryParams } from './objectToQueryParams'

export type TagResponse = {
  items: {
    name: string
    count: number
  }[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

export type QueryParams = {
  page?: number
  pageSize?: number
  sort?: 'popular' | 'name'
  order?: 'asc' | 'desc'
}

export const useTagsQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()

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

  const page = Number(searchParams.get('page')) || DEFAULT_SEARCH_PARAMS.page
  const pageSize =
    Number(searchParams.get('pagesize')) || DEFAULT_SEARCH_PARAMS.pageSize
  const sort = searchParams.get('sort') || DEFAULT_SEARCH_PARAMS.sort
  const order = searchParams.get('order') || DEFAULT_SEARCH_PARAMS.order

  const fetchUrl = `${API_URL}?${objectToQueryParams({ page, order, pageSize, sort, site: 'stackoverflow' })}`

  console.log('fetchUrl', fetchUrl)

  const swrProps = useSWR<TagResponse>(fetchUrl, fetcher)

  const data =
    (swrProps.data?.items &&
      swrProps.data?.items.map(
        ({ name, count }: { name: string; count: number }) => ({
          key: name + count,
          name,
          count,
        })
      )) ||
    swrProps.data

  return { onChange, ...swrProps, data }
}
