import React from 'react';
import RootNavigation from './RootNavigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native"]);
export default function App() {
  return (
    <RootNavigation />
  );
}
