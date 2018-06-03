import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';

import Welcome from './src/view/Welcome';
import Info from './src/view/Info';

const Tabs =  createBottomTabNavigator(
  { 
    Welcome: {
      screen: Welcome,
      navigationOptions: {
          tabBarLabel: "Weather",
          tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="weather-partlycloudy" size={25} color={tintColor}/>        
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({ tintColor }) => <Feather name="info" size={25} color={tintColor}/>        
    }
    }
  },
 {
  initialRouteName: "Welcome",
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#bdc3c7',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#8e44ad',
    },
  },
 } 
)

class App extends React.Component {
  render() {
    return (
      <Tabs/>
    );
  }
}

export default App;