import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CryptoList from '../screens/world-tab-screens/CryptoList';
import UserFav from '../screens/world-tab-screens/UserFav';

const Tab = createMaterialTopTabNavigator();
const WorldTabComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Coins" component={CryptoList} />
      <Tab.Screen name="Your Fav" component={UserFav} />
    </Tab.Navigator>
  );
};

export default WorldTabComponent;
