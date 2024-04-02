import { objectToQueryParams } from './objectToQueryParams'

const API_URL = 'https://api.stackexchange.com/2.3/tags'

type TagResponse = {
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

export const getTagsFromApi = async ({
  page = 1,
  order = 'desc',
  pageSize = 10,
  sort = 'popular',
}: QueryParams): Promise<TagResponse> => {
  const res = await fetch(
    `${API_URL}?${objectToQueryParams({ page, order, pageSize, sort, site: 'stackoverflow' })}`,
    {
      mode: 'cors',
      method: 'GET',
    }
  )

  console.log('res', res)

  return res.json()
}
