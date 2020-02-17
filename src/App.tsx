import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Router from './components/route/Router';
import './stylesheet.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
);

export default App;
