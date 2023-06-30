import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IMG_DATA from '../assets/IMG_DATA';

const CoinShell = ({data}) => {
  const perc_24h = parseFloat(data.quote.USD.percent_change_24h).toFixed(2);
  const gaining = perc_24h < 0 ? false : true;
  // console.log(data.id - 1);

  // let img_string = require(`../assets/coin_pics/google.png`);
  // console.log(
  //   IMG_DATA[data.id - 1] === undefined
  //     ? 'No Data'
  //     : IMG_DATA[data.id - 1].image,
  // );
  let img_string =
    IMG_DATA[data.id - 1] === undefined
      ? require(`../assets/coin_pics/google.png`)
      : IMG_DATA[data.id - 1].image;

  return (
    <View style={CSstyles.container}>
      <View style={CSstyles.image_section}>
        <Image style={CSstyles.logo} source={img_string} />
      </View>
      <View style={CSstyles.inner_section}>
        <Text style={CSstyles.text}>{data.name}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.symbol}</Text>
      </View>
      <View style={CSstyles.price_section}>
        <Text style={{fontSize: 20, textAlign: 'right', color: 'black'}}>
          ${parseFloat(data.quote['USD'].price).toFixed(3)}
        </Text>
      </View>
      <View
        style={[
          CSstyles.percent_section,
          // gaining ? {backgroundColor: '#EDF8F4'} : {backgroundColor: '#FEEEEE'},
          gaining ? {backgroundColor: '#cff7ea'} : {backgroundColor: '#FEEEEE'},
        ]}>
        <Text
          style={[
            {fontSize: 18, textAlign: 'right'},
            gaining ? {color: '#4DBB98'} : {color: 'red'},
          ]}>
          {gaining ? `+` : `-`}
          {`${perc_24h} %`}
        </Text>
      </View>
    </View>
  );
};

const CSstyles = StyleSheet.create({
  container: {
    height: 70,
    width: 380,
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 3,
    borderWidth: 1.2,
    borderColor: 'grey',
    borderRadius: 8,
    justifyContent: 'center',
  },
  image_section: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  logo: {
    height: 40,
    width: 40,
  },
  inner_section: {
    flex: 2.2,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  price_section: {
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  percent_section: {
    flex: 1.9,
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    marginVertical: 7,
    marginRight: 4,
    paddingHorizontal: 1,
    borderRadius: 12,
  },
});

export default CoinShell;
