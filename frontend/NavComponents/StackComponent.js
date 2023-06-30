import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import DrawerComponent from './DrawerComponent';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const StackComponent = () => {
  const LogInStatus = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {}, [LogInStatus]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!LogInStatus && <Stack.Screen name="Login" component={Login} />}
      <Stack.Screen name="EnterApp" component={DrawerComponent} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackComponent;
