import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import GoToApp from '../screens/GoToApp';
import Notifications from '../screens/drawer-screens/Notifications';
import Profile from '../screens/drawer-screens/Profile';
import CustomDrawer from '../components/CustomDrawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/drawer-screens/Dashboard';


const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 17,
          fontFamily: 'GillSans',
          fontWeight: '700',
        },
      }}>
      <Drawer.Screen
        name={'Dashboard'}
        component={Dashboard}
        options={{
          drawerIcon: ({color}) => (
            <Ionicon name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Notification'}
        component={Notifications}
        options={{
          drawerIcon: ({color}) => (
            <Ionicon name={'notifications-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Profile'}
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicon name={'skull-outline'} size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
