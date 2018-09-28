import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

import userReducer from './userReducer';

// @See: Nested Persists - https://github.com/rt2zz/redux-persist#nested-persists
const rootPersistConfig = {
  key: 'APP_',
  storage: AsyncStorage,
  // blacklist: ['other'],
};
const userPersistConfig = {
  key: 'APP_user',
  storage: AsyncStorage,
  whitelist: ['userInfo', 'connected'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  // other: otherReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
