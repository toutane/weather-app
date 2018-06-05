import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

import FadeInView from '../animations/fadeInView';

export default class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onPressed: false
    };
  }

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

  hour () {
    let day = moment(this.props.day.dt * 1000).format('LT');
    return (
      <Text style={[styles.white, styles.bold]}>{ day }</Text>
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

  color () {
    const hour =  moment(this.props.day.dt * 1000).format('LT');         
    let color
    let info
    switch (hour) {
      case '2:00 AM':
      color = "#0E47A0"
      break;
      case '5:00 AM':
      color = "#1765C1"
      break;
      case '8:00 AM':
      color = "#1A76D3"
      break;
      case '11:00 AM':
      color = "#FDD734"
      break;
      case '2:00 PM':
      color = "#f9ca24"
      break;
      case '5:00 PM':
      color = "#f6b93b"
      break;
      case '8:00 PM':
      color = "#1A76D3"
      break;
      case '11:00 PM':
      color = "#1765C1"
      break;
      default: 
      color = "#8e44ad"
    }
    return (
      {backgroundColor: color}
    )
  }

  info () {
    let hour =  moment(this.props.day.dt * 1000).format('LT'); 
    let day = moment(this.props.day.dt * 1000).format('dddd');      
    let date = moment(this.props.day.dt * 1000).format('MMM Do YY');  
    if (hour == '2:00 AM') {
      return (
        <View style={[styles.view, styles.flex, {backgroundColor: '#222f3e'}]}>
          <Text style={[styles.white, styles.bold, {fontSize: 22}]}>{day} { date }</Text>
        </View>
      )
    }           
  }

  render () {
    return (
      this.props.index === 0
      ? <FadeInView delay={this.props.index * 50}>
          <View style={styles.firstView}>
              <Text style={{fontSize: 30, marginBottom: 40, marginTop: 5}}>{this.day()} {this.date()}   {this.hour()}</Text>
              {this.icon(120)}
              <Text style={[styles.temp, {fontSize: 40, marginBottom: 30, marginTop: 30}]}>{Math.round(this.props.day.main.temp)}°C</Text>
              <View style={[styles.flex, {justifyContent: 'space-between', marginBottom: 10}]}>
                <Text style={[styles.white, {fontSize: 15}]}>Humidity: <Text style={[styles.bold, {fontSize: 17}]}>{this.props.day.main.humidity}</Text></Text>
                <Text style={[styles.white, {marginLeft: 10, fontSize: 15}]}>Pressure: <Text style={[styles.bold, {fontSize: 17}]}>{Math.round(this.props.day.main.pressure)}</Text></Text>
                <Text style={[styles.white, {marginLeft: 10, fontSize: 15}]}>Altitude: <Text style={[styles.bold, {fontSize: 17}]}>{this.props.day.clouds.all}</Text></Text>
              </View>
          </View>
        </FadeInView>
      : <FadeInView delay={this.props.index * 50}>
          {this.info()}
          <View style={[styles.view, styles.flex, this.color()]}>
            <View style={styles.flex}>
              {this.icon(40)}
              <Text style={{marginLeft: 10}} onPress={() => this.setState({onPressed: !this.state.onPressed})}>{this.day()} {this.date()}   {this.hour()}</Text>
            </View>
            <Text style={styles.temp}>{Math.round(this.props.day.main.temp)}°C</Text>
          </View>
          {this.state.onPressed
            ? <FadeInView>
                <View style={[styles.view, styles.flex, this.color()]}>
                  <Text style={[styles.white, {marginLeft: 10, fontSize: 15}]}>Humidity: <Text style={[styles.bold, {fontSize: 17}]}>{this.props.day.main.humidity}</Text></Text>
                  <Text style={[styles.white, {marginLeft: 10, fontSize: 15}]}>Pressure: <Text style={[styles.bold, {fontSize: 17}]}>{Math.round(this.props.day.main.pressure)}</Text></Text>
                  <Text style={[styles.white, {marginLeft: 10, fontSize: 15}]}>Altitude: <Text style={[styles.bold, {fontSize: 17}]}>{this.props.day.clouds.all}</Text></Text>
                </View>
              </FadeInView>
            : null}
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
    backgroundColor: '#222f3e',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#a4b0be',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'    
  },
  view: {
    backgroundColor: '#8e44ad',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#a4b0be',
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