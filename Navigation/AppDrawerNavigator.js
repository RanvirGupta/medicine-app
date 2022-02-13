import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import SettingScreen from '../Screens/SettingScreen'
import {Icon} from 'react-native-elements';
import CustomSideBarMenu from '../Screens/customsidebarmenu'


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
{
  contentComponent:CustomSideBarMenu
},
  {
    initialRouteName : 'Home'
  })

