// @TODO how to implement a store for prod and dev ? See: https://github.com/reduxjs/redux/tree/master/examples/real-world/src/store

import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import persistedReducer from '../reducers';

export default (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    // applyMiddleware(thunk, api)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
