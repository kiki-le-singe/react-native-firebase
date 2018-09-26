// @TODO how to implement a store for prod and dev ? See: https://github.com/reduxjs/redux/tree/master/examples/real-world/src/store

import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers';
import { blacklist, whitelist } from './constants';

const persistConfig = {
  key: 'APP_',
  storage: AsyncStorage,
  blacklist,
  whitelist,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    // applyMiddleware(thunk, api)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
