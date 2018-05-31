import React from 'react';
import { createBottomTabNavigator} from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import Welcome from '../view/Welcome';
import Weather from '../view/Weather';

export default createBottomTabNavigator(
  { 
    Welcome: {
      screen: Welcome,
      navigationOptions: {
          tabBarLabel: "Welcome",
          tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={25} color={tintColor}/>        
      }
    },
    Weather: {
      screen: Weather,
      navigationOptions: {
        tabBarLabel: "Weather",
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="weather-partlycloudy" size={25} color={tintColor}/>        
    }
    }
  },
 {
  initialRouteName: "Welcome",
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#9b59b6',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#8e44ad',
    },
  },
 } 
)
