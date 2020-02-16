import { compose, createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare let window: ExtendedWindow;

const composeReduxDevToolsEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeReduxDevToolsEnhancers());

export type RootState = ReturnType<typeof store.getState>;
