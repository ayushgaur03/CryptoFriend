import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserFav = () => {
  return (
    <View style={styles.container}>
      <Text>User Fav</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyCenter: 'center',
  },
});

export default UserFav;
