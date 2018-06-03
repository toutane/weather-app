import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

import FadeInView from '../animations/fadeInView';

export default class Row extends React.Component {

  day () {
    let day = moment(this.props.day.dt * 1000).format('ddd');
    return (
      <Text style={[styles.white, styles.bold]}>{ day.toUpperCase() }</Text>
    )
  }

  date () {
    let day = moment(this.props.day.dt * 1000).format('DD/MM');
    return (
      <Text style={styles.white}>{ day }</Text>
    )
  }

  icon (size) {
    const type = this.props.day.weather[0].main.toLowerCase()
    let icon
    switch (type) {
      case 'clouds':
        icon = "weather-partlycloudy"
        break;
      case 'rain':
        icon = "weather-pouring"
        break;
      default:
        icon = "weather-sunny"
    }
    return (
      <MaterialCommunityIcons name={icon} size={size} style={{width: size, height: size, color:'#FFF'}} />
    )
  }

  render () {
    return (
      this.props.index === 0
      ? <FadeInView delay={this.props.index * 50}>
          <View style={[styles.flex, styles.view, styles.firstView]}>
            <View>
              <Text style={{fontSize: 20}}>{this.day()} {this.date()}</Text>
              {this.icon(80)}
            </View>
            <View>
              <Text style={[styles.temp, {fontSize: 35}]}>{Math.round(this.props.day.main.temp)}°C</Text>
              <Text style={[styles.white, {fontSize: 18, top:10}]}>Humidity: <Text style={[styles.bold, {fontSize: 20}]}>{this.props.day.main.humidity}</Text></Text>
            </View>
          </View>
        </FadeInView>
      : <FadeInView delay={this.props.index * 50}>
          <View style={[styles.view, styles.flex]}>
            <View style={styles.flex}>
              {this.icon(40)}
              <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
            </View>
            <Text style={styles.temp}>{Math.round(this.props.day.main.temp)}°C</Text>
          </View>
        </FadeInView>        
    )
  }
}

const styles = StyleSheet.create({
  white: {
    color: '#FFF'
  },
  bold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstView: {
    backgroundColor: '#9b59b6'
  },
  view: {
    backgroundColor: '#8e44ad',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#9b59b6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between'    
  },
  temp: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
})