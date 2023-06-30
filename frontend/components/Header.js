import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Icon = <IonIcon name={'menu'} size={45} color={'white'} />;

const Header = () => {
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const width = window.width * 0.18;
  return (
    <View style={styles.headerBar}>
      <View
        style={{
          marginLeft: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}>
          {Icon}
        </Pressable>
      </View>
      <View style={[styles.textBox, {paddingLeft: width}]}>
        <Text style={styles.headerText}>CryptoPal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 60,
    backgroundColor: '#8A2BE2',
  },
  textBox: {
    fontSize: 25,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'GillSans-Bold',
    color: 'white',
  },
});
export default Header;
