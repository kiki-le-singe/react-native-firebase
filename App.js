import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootStack from './src/Navigator';
import Loader from './src/components/Loader';

import configureStore from './src/redux/store/configureStore';

const { store, persistor } = configureStore();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader loading />} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    );
  }
}
