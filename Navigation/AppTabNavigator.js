import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import NotificationScreen from "../Screens/Notification";
import AccountScreen from "../Screens/Account";

export const AppTabNavigator  = createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/Home.png")} style={{width:20, height:20}}/>,
      tabBarLabel:"Home",
    }
  },
  Category:{
    screen:CategoryScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/Category.png")} style={{width:20, height:20}}/>,
      tabBarLabel:"Category",
    },
  },
 Notifications:{
    screen:NotificationScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/Bell.png")} style={{width:20, height:20}}/>,
      tabBarLabel:"Notifications",
    },
 },
  Account:{
    screen:AccountScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/Account.png")} style={{width:40, height:40}}/>,
      tabBarLabel:"Account",
    }

  },
})