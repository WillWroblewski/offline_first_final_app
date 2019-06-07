import React from 'react';
import { Provider } from "react-redux";
import { StyleSheet, View } from 'react-native';
import RepositoryList from './components/repositories/RepositoryList';

import configureStore  from "./store/store";

import { PersistGate } from 'redux-persist/integration/react';

let { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <RepositoryList />
        </View>
      </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }  
});

export default App;
