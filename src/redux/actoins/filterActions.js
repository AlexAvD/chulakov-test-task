import { SET_ORDER, SET_SORT, SET_SEARCH, SET_FILTER } from '../types'

export const setOrderAction = (order) => ({
  type: SET_ORDER,
  order
})

export const setSortAction = (sort) => ({
  type: SET_SORT,
  sort
})

export const setSearchAction = (search) => ({
  type: SET_SEARCH,
  search
})

export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  filter
})


