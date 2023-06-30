import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LogOutUser} from '../store/actions/firebaseActions';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const user_data = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#8200d6',
        }}>
        <ImageBackground
          source={require('../assets/pics/menu-bg1.jpeg')}
          style={{
            height: 200,
            top: 0,
            margin: 0,
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 30,
          }}>
          <Image
            source={require('../assets/pics/user-img.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 40,
              marginBottom: 14,
            }}
          />
          <View style={{marginBottom: 5}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                fontSize: 18,
                fontWeight: '700',
                paddingBottom: 5,
              }}>
              {user_data.user_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Platinum Member
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <Pressable
          onPress={() => dispatch(LogOutUser())}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    padding: 0,
  },
  bottom: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default CustomDrawer;
