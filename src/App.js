import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './components/repositories/RepositoryList';

import store from "./store/store";

import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
      <View style={styles.container}>
        <RepositoryList />
      </View>
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
