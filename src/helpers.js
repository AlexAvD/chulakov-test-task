import qs from 'query-string'

export const handleLocationSearch = (locationSearch, params) => {
  const url = qs.stringify({
    ...qs.parse(locationSearch),
    ...params
  });

  return `?${url}`;
}