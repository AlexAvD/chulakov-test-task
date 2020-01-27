import { SET_LANGUAGE } from '../types'

const initialState = 'ru';

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;

    default: 
      return state;
  }
}

export default dataReducer;