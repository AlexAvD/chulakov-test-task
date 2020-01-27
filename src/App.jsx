import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header/Header'
import './App.scss';
import Main from './components/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
