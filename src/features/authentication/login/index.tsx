import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from 'app/reducer';
import { Container, Header, Text, TouchableOpacity } from 'components';
import EventEmitter, { EventTypes } from 'utils/EventEmitter';
import Toast from 'react-native-simple-toast-message';
let i = 0;
const LoginScreen = () => {
  console.log('render login screen');
  const dispatch = useDispatch();
  return (
    <Container>
      <Header title="Simple toast" />
      <TouchableOpacity
        onPress={() => {
          // dispatch(setLogin({ isLoggedIn: true }));
          if (i % 2 === 0) {
            Toast.showSuccess('Here is a success toast');
          } else {
            Toast.showError('Login \n error ' + i++);
          }
        }}
      >
        <Text text="Show toast" />
      </TouchableOpacity>
    </Container>
  );
};
export default LoginScreen;
