//Firebase Registration Stuff
import auth from '@react-native-firebase/auth';
import {authActions} from '../slice/AuthSlice';

export const RegisterUser = (name, email, password) => {
  return async dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        console.log('User account created & signed in!');
        await userCredential.user.updateProfile({displayName: name});
        try {
          dispatch(
            authActions.LogInUser({
              username: name,
              id: userCredential.user.uid,
            }),
          );
        } catch (e) {
          console.log('Error->' + e);
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          return console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          return console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};

export const LoginUser = (email, password) => {
  return async dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User has been signed in!');
        console.log(userCredential.user);
        try {
          dispatch(
            authActions.LogInUser({
              username: userCredential.user.displayName,
              id: userCredential.user.uid,
            }),
          );
        } catch (e) {
          console.log('Error->' + e);
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          return console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          return console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};

export const LogOutUser = () => {
  return async dispatch => {
    auth()
      .signOut()
      .then(response => {
        console.log(response);
        try {
          dispatch(authActions.LogOutUser());
        } catch (error) {
          console.log('Error detected after firebase log-out: ' + error);
        }
      })
      .catch(err => {
        console.log('Error in log-out with firebase');
        console.log(err);
      });
  };
};
