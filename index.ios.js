import React from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = {
  appStyle: {
    flex: 1,
  },
};

const App = () => (
  <View style={styles.appStyle}>
    <Header headerText="Michał" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
