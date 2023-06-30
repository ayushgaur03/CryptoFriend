import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button,
  Text,
} from 'react-native';
import AppButton from '../components/AppButton';
import {LoginUser} from '../store/actions/firebaseActions';
import {useDispatch} from 'react-redux';

const screen = Dimensions.get('screen');
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/pics/menu-bg1.jpeg')}
        resizeMode={'cover'}>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.section1}>
            <TextInput
              style={styles.inputField}
              placeholder="email"
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.inputField}
              placeholder="password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.section3}>
            <AppButton
              title={'Continue'}
              func={() => dispatch(LoginUser(email, password))}
            />
            <Text>___________________________________________________</Text>
            <AppButton
              title={'Sign Up'}
              func={() => navigation.navigate('SignUp')}
            />
          </View>
          <View style={styles.footer}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    height: screen.height - 60,
    zIndex: 1,
    marginTop: 140,
    marginBottom: 50,
    height: 0.6 * screen.height,
    width: 0.95 * screen.width,
    marginHorizontal: 12,
    borderRadius: 15,
    position: 'absolute',
  },
  header: {
    flex: 0.5,
    // backgroundColor: 'yellow',
  },
  section1: {
    flex: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  section3: {
    flex: 0.8,
    flexDirection: 'column',
    paddingTop: 10,
    // backgroundColor: 'orange',
  },
  inputField: {
    marginVertical: 8,
    width: screen.width - 50,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderColor: '#8a2be2',
    borderWidth: 3,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    // backgroundColor: 'pink',
  },
});

export default Login;
