// @TODO see https://github.com/reduxjs/redux/tree/master/examples/real-world/src/store

import { createStore } from 'redux';

import rootReducer from '../reducers';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  // applyMiddleware(thunk, api)
);

export default configureStore;
