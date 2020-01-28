import { createStore, combineReducers, applyMiddleware } from 'redux'
import  { createLogger } from 'redux-logger'
import languageReducer from './reducers/languageReducer';
import dataReducer from './reducers/dataReducer'
import filterReducer from './reducers/filterReducer'
import viewReducer from './reducers/viewReducer'

const initialState = {};

const reducers = combineReducers({
  language: languageReducer,
  data: dataReducer,
  filter: filterReducer,
  view: viewReducer
})

const store = createStore(
  reducers, 
  initialState,
  applyMiddleware(createLogger())
)

export default store;