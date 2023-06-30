import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  ImageBackground,
} from 'react-native';
import AppButton from '../components/AppButton';

//Firebase Registration Stuff
import auth from '@react-native-firebase/auth';
import {RegisterUser} from '../store/actions/firebaseActions';
import {useDispatch} from 'react-redux';

const screen = Dimensions.get('screen');

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
              placeholder="name"
              onChangeText={setName}
            />
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
          <View style={styles.section2}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>
              By checking this you are agreeing to terms and conditions of the
              app
            </Text>
          </View>
          <View style={styles.section3}>
            <AppButton
              title={'Continue'}
              func={() => dispatch(RegisterUser(name, email, password))}
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
    flex: 1.5,
  },
  section1: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.75,
    paddingHorizontal: 20,
  },
  section3: {
    marginBottom: 2.5,
    flex: 2,
    flexDirection: 'column',
    paddingTop: 10,
  },

  inputField: {
    marginVertical: 10,
    width: screen.width - 50,
    paddingHorizontal: 10,
    fontSize: 16,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderColor: '#8a2be2',
    borderWidth: 3,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
  },
  button: {
    height: 80,
  },
});
export default SignUp;
