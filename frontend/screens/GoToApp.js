import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

const GoToApp = () => {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <View style={styles.pageContainer}>
        <Text>UID : {user_data.uid}</Text>
        <Text>Name : {user_data.name}</Text>
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
  pageContainer: {
    backgroundColor: '#D0E5EF',
    flex: 1,
  },
});

export default GoToApp;
