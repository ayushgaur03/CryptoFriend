import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../../components/Header';
import WorldTabComponent from '../../NavComponents/WorldTabComponent';

const WorldCheck = () => {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <View style={styles.search_section}>
        <TextInput placeholder={'Search ...'} style={styles.searchbar} />
      </View>
      <WorldTabComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  search_section: {
    flex: 0.095,
    padding: 3,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    backgroundColor: '#F1F0F5',
    flex: 0.92,
    width: '96%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
});

export default WorldCheck;
