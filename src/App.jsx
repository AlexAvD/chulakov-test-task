import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { setDataAction } from './redux/actoins/dataActions';

import Header from './components/Header'
import Main from './components/Main';

import './App.scss';

const data = [
	{
		"id": 0,
		"favourite": false,
		"name": "Gilbert Morton",
		"age": 22,
		"phone": "(369) 432-9206",
		"image": "sheep",
		"phrase": "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
		"video": "shoe"
	},
	{
		"id": 1,
		"favourite": true,
		"name": "Jeffery Davidson",
		"age": 57,
		"phone": "(415) 670-6901",
		"image": "pig",
		"phrase": "Lejtefup boc hi ricge tela mo ragdi vutomeh kuhup veosubu pe ceso juhzustum ipagagcub fu."
	},
	{
		"id": 2,
		"favourite": false,
		"name": "Lela Clark",
		"age": 30,
		"phone": "(635) 873-1879",
		"image": "cat",
		"phrase": "Bup dod elavor etudorkaw bapibune peijbur biot cuskoruc no liwuduk osi lazob zu rij buduhkaf.",
		"video": "boy"
  }
]

function App() {
  useEffect(() => {
    store.dispatch(setDataAction(data))
  }, [])

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
