import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';

import configureStore from './src/state/configureStore';

export default function App() {
  const initialState = {};
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
