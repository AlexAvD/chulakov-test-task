import { createStore, combineReducers, applyMiddleware } from 'redux';
import  { createLogger } from 'redux-logger';
import languageReducer from './reducers/languageReducer';
import dataReducer from './reducers/dataReducer';

const initialState = {};

const reducers = combineReducers({
  language: languageReducer,
  data: dataReducer
})

const store = createStore(
  reducers, 
  initialState, 
  applyMiddleware(createLogger())
); 

export default store;