import { SET_DATA, SET_FAVOURITE } from '../types';

export const setDataAction = (data) => ({
  type: SET_DATA,
  data
});

export const setFavouriteAction = (id) => ({
  type: SET_FAVOURITE,
  id
});

