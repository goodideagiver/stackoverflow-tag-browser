export const objectToQueryParams = (
  queryParamsObject: Record<string, string | number | boolean>
): string => {
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(queryParamsObject)) {
    searchParams.append(key, String(value))
  }

  return searchParams.toString()
}
