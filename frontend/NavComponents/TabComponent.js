import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/tab-screens/Home';
import WorldCheck from '../screens/tab-screens/WorldCheck';

const Tab = createMaterialBottomTabNavigator();
const TabComponent = () => (
  <Tab.Navigator
    activeColor="#fff"
    inactiveColor="#8A2BE2"
    barStyle={{
      backgroundColor: '#8A2BE2',
      fontSize: 20,
      paddingVertical: 8,
    }}
    // screenOptions={({route, headerShown}) => ({
    // tabBarIcon: ({focused, color = '#fff', size}) => {
    //   let iconName;
    //   if (route.name === 'Home') {
    //     iconName = focused ? 'home' : 'home-outline';
    //   } else if (route.name === 'WorldCheck') {
    //     iconName = focused ? 'planet-sharp' : 'planet-outline';
    //   }

    //   // You can return any component that you like here!
    //   return <IonIcon name={iconName} size={20} color={color} />;
    // },
    screenOptions={{
      headerShown: false,
      tabBarStyle: {position: 'absolute', color: '#fff'},
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => <Ionicon name={'home'} size={20} color={'#fff'} />,
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="WorldCheck"
      component={WorldCheck}
      options={{
        tabBarIcon: () => (
          <Ionicon name={'planet-sharp'} size={20} color={'#fff'} />
        ),
        tabBarLabel: 'WorldCheck',
      }}
    />
  </Tab.Navigator>
);

export default TabComponent;
