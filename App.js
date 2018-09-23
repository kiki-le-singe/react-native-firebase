import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import RootStack from './src/Navigator';

import configureStore from './src/redux/store/configureStore';

const store = configureStore();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
