import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Router from './components/route/Router';
import './stylesheet.css';

const App = (): ReactElement => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
