import { SET_VIEW } from '../types'

const initialState = 'table'

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.view;

    default: 
      return state;
  }
}

export default viewReducer;