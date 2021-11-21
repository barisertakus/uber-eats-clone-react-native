import React from 'react';
import RootNavigation from './RootNavigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native",
  "Setting a timer for a long period of time",
]);

if(Platform.OS === 'android') { // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/en-IN'); // load the required locale details
}

export default function App() {
  return (
    <RootNavigation />
  );
}
