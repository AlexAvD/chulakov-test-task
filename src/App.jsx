import React, { useEffect } from 'react'
import store from './redux/store'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import qs from 'query-string'
import { setDataAction } from './redux/actoins/dataActions';
import { setViewAction } from './redux/actoins/viewActions';

import Header from './components/Header'
import Main from './components/Main';

import './App.scss';
import { setFilterAction } from './redux/actoins/filterActions';

const possibleFilterParams = {
	sort: ['id', 'age', 'name'],
	order: ['descending', 'ascending']
}

const possibleViewParams = ['table', 'preview']
const dataUrl = 'http://localhost:8080/data'

function App() {
	const { pathname, search } = useLocation();
	
	useEffect(() => {
		if (pathname === '/' && search) {
			const params = qs.parse(search);
			const filter = {};

			for (const param in params) {
				const paramValue = params[param];

				if (paramValue) {
					if (param in possibleFilterParams) {
						if (possibleFilterParams[param].indexOf(paramValue) !== -1) {
							filter[param] = paramValue;
						} 
					} else if (param === 'search') {
						filter[param] = paramValue;
					} else if (param === 'view') {
						if (possibleViewParams.indexOf(paramValue) !== -1) {
							store.dispatch(setViewAction(paramValue));
						}
					}
				}
			}

			if (Object.keys(filter).length) {
				store.dispatch(setFilterAction(filter));
			}
		}

		axios.get(dataUrl)
			.then(response => response.data)
			.then(data => {
				store.dispatch(setDataAction(data))
			})
			.catch(err => {
				console.log(err);
			})
	// eslint-disable-next-line
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
