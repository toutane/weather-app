import React, { Component } from 'react';
import { StyleSheet, ListView, Text, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import WeatherRow from './Row';

const API_KEY = "5b7cfeb6965b2428520ce041e1cbd719";

export default class Value extends Component {
  
  static navigationOptions = ({navigation}) => {
    return {
    title: `Weather / ${navigation.state.params.city}`,
    headerStyle: {
        backgroundColor: '#8e44ad'
    },
    headerTitleStyle: {
        color: '#FFF',
        fontSize: 25
    }
  }
  }

  constructor(props) {
    super(props);
    this.state = {
      city: this.props.navigation.state.params.city,
      country: this.props.navigation.state.params.country,
      // city: "Paris",
      // country: "Fr",
      weatherData: null,
    };
    // setTimeout(() => {
    //   this.fetchWeather()
    // }, 500)

      this.fetchWeather()    
  }

  fetchWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      this.setState({weatherData: response.data})
    })
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2,) => r1 !== r2});
    return (
     <View style={{flex: 1, backgroundColor: '#9b59b6'}}>
        {this.state.weatherData === null
        ? <ActivityIndicator/>
        : <ListView
          dataSource={ds.cloneWithRows(this.state.weatherData.list)}
          renderRow={(row, x, i) => 
          <WeatherRow day={row} index={parseInt(i, 10)}/>
        }/>
      }
     </View>
    )
  }
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
});