import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header'

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Notification Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    bottom: 0,
  },
});
export default Notifications;
