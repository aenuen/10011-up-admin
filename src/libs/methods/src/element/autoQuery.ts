/**
 * @example :fetch-suggestions="(q,c) => autoQuery(q,c,a)"
 * @param queryString
 * @param callback
 * @param array
 */
export const autoQuery = (queryString: string, callback: any, array: any[]) => {
  callback(
    queryString
      ? array.filter((state) =>
          state.value.toUpperCase().match(queryString.toUpperCase())
        )
      : array
  )
}
