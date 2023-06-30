/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
// import store from './store/redux';
// import persistor from './store/redux';
import {store, persistor} from './store/redux'
import {PersistGate} from 'redux-persist/lib/integration/react';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
// AppRegistry.registerComponent(appName, () => App);
