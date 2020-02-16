import { compose, createStore } from 'redux';
import RootReducers from '../reducer/RootReducers';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare let window: ExtendedWindow;

const composeReduxDevToolsEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducers, composeReduxDevToolsEnhancers());
