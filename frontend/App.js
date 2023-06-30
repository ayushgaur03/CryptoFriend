import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackComponent from './NavComponents/StackComponent';

export default function App() {
  return (
    <NavigationContainer>
      <StackComponent />
    </NavigationContainer>
  );
}
