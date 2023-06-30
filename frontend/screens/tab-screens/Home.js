import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';

const Home = () => {
  const data = useSelector(state => state.auth);
  console.log('In Home:');
  console.log(data);

  return (
    <View style={styles.screenContainer}>
      <Header />
      <Text>Name: {data.user_name}</Text>
      <Text>User_id: {data.user_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default Home;
