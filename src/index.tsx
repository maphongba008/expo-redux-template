import React from 'react';
import { StatusBar } from 'react-native';
// import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { ActionSheet, Box, LoadingHudProvider } from 'components';
import { Dialog } from 'components/Dialog';
import Navigation from 'navigation';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'reduxStore';
import Toast from 'react-native-simple-toast-message';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Box full>
          <Navigation />
          <LoadingHudProvider />
          <ActionSheet.Provider />
          <Dialog.Provider />
          <Toast.Provider />
        </Box>
      </PersistGate>
    </Provider>
  );
};
