/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from './src/theme';
import { moderateScale } from './src/utils';
import { RootNavigation } from './src/navigation/rootNavigation';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.BLACK}
          barStyle={'light-content'}
        />
        <RootNavigation />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  headerView: {
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
});

export default App;
