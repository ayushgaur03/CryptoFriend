import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';
import CoinShell from '../../components/CoinShell';
import API_KEY from '../../assets/API_KEY';

const screen = Dimensions.get('screen');

const CryptoList = () => {
  const [main_data, setMain_data] = useState([]);
  useEffect(() => {
    GET_DATA();
  }, []);

  const GET_DATA = () => {
    axios
      .get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          params: {
            start: 1,
            limit: 100,
            convert: 'USD',
          },
          headers: {
            'X-CMC_PRO_API_KEY': API_KEY,
          },
        },
      )
      .then(response => {
        console.log(
          '==========================================================',
        );

        console.log(
          response != null ? 'Response Received' : 'Response Not Received',
        );
        console.log(
          '==========================================================',
        );
        setMain_data(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderItem = ({item}) => <CoinShell data={item} />;

  return (
    <View
      style={{
        height: screen.height,
        width: screen.width,
      }}>
      <View style={[styles.listings]}>
        <View style={styles.crypto_list}>
          {/* <ScrollView> */}
            <FlatList
              data={main_data}
              renderItem={renderItem}
              keyExtractor={item => JSON.stringify(item.id)}
            />
          {/* </ScrollView> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app_screen: {
    height: screen.height,
    width: screen.width,
  },
  navbar: {
    backgroundColor: '#3894C4',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  listings: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  crypto_list: {
    height: 60,
    marginTop: 10,
    height: 500,
  },
});

export default CryptoList;
