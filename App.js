import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import {AppDrawerNavigator} from './Navigation/AppDrawerNavigator';
import {AppTabNavigator} from './Navigation/AppTabNavigator';

export default function App(){
  return(
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  Drawer:AppDrawerNavigator,
  BottomTab:AppTabNavigator,
})
const AppContainer = createAppContainer(switchNavigator)