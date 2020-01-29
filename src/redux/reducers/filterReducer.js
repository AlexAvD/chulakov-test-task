import { SET_SORT, SET_ORDER, SET_SEARCH, SET_FILTER } from '../types'

const initialState = {
  sort: 'id',
  order: 'ascending',
  search: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        sort: action.sort,
      };

    case SET_ORDER:
      return {
        ...state,
        order: action.order
      };

    case SET_SEARCH:
      return {
        ...state,
        search: action.search
      };

    case SET_FILTER:
      return {
        ...state,
        ...action.filter
      }

    default: 
      return state;
  }
}

export default filterReducer;