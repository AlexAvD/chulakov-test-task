import { SET_DATA, SET_FAVOURITE } from '../types'

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.data;

    case SET_FAVOURITE:
      return state.map(el => {
        if (el.id === action.id) {
          el.favourite = !el.favourite;
        }

        return el;
      });

    default: 
      return state;
  }
}

export default dataReducer;