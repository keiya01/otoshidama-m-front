import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './components/route/Router';
import reducer from './reducer/reducer';
import { composeReduxDevToolsEnhancers } from './store/store';

export const store = createStore(reducer, composeReduxDevToolsEnhancers());

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
);

export default App;
