import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {
  createRouter,
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from '@expo/ex-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

import { Provider } from 'react-redux';
import Router from './navigation/router.js';
import Store from './redux/store.js';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider router={Router} context={navigationContext}>
          <StackNavigation
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute('layout')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
