import React from 'react';
import {Pressable, StyleSheet, View, Text, Dimensions} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const screen = Dimensions.get('screen');
const AppButton = ({func, h, w, color, title}) => {
//   console.log('App Button is visible!!');
  return (
    <View style={[styles.container]}>
      <Pressable onPress={func}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 60,
    width: screen.width-40,
    marginHorizontal:10,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aa18ea',
  },
  text: {
    fontSize: 22,
    fontWeight:'700',
    color: 'white',
    textTransform: 'uppercase',
  },
});
export default AppButton;
