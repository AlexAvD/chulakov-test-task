import { SET_FILTER } from '../types'

const initialState = {
  sort: 'id',
  order: 'ascending'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default: 
      return state;
  }
}

export default filterReducer;