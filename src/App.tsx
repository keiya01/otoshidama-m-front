import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './components/route/Router';
import reducer from './reducer/reducer';

export const store = createStore(reducer);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
);

export default App;
