import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const API_KEY = "5ad8bc650065e41801e3156274cdfa80";

import Value from '../components/Value';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "weather-partlycloudy",
      cityInput: "",
      countryInput: "",
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
    getWeather = async (e) => {
      e.preventDefault();
      const city = this.state.cityInput;
      const country = this.state.countryInput;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        },
        // // console.log(this.state.description)
        // this.state.description == "broken clouds"
        // ? this.setState({ icon: "weather-cloudy" })
        // : null
      );
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the values."
        });
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        {
          this.state.city == undefined
          ? <View>
              <Text style={styles.title}>
                Weather App&nbsp;
                <MaterialCommunityIcons name="weather-partlycloudy" size={50} style={styles.logo} />
              </Text>
              <Text style={{ fontWeight: '100', color: '#FFF', fontSize: 25, top: 280, textAlign: 'center'}}>
                Choose a city...
              </Text>
            </View>
          : <View>
             <Text style={styles.title}>
              {this.state.city}, {this.state.country}&nbsp;
              {
                this.state.description == "broken clouds"
                ? <MaterialCommunityIcons name="weather-cloudy" size={50} style={styles.logo} />
                :  this.state.description == "haze"
                ? <MaterialCommunityIcons name="weather-fog" size={50} style={styles.logo} />
                : <MaterialCommunityIcons name={this.state.icon} size={50} style={styles.logo} />
                }
            </Text>
            <Value
              temperature={this.state.temperature} 
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}/>
            </View>
        }
        </View>
        <View style={styles.formContainer}>
          <TextInput 
          placeholder="city..."
          placeholderTextColor="#ecf0f1"
          returnKeyType="next"
          style={styles.input}
          onChangeText={(cityInput) => this.setState({cityInput})}
          value={this.state.cityInput}
          />
          <TextInput 
          placeholder="country..."
          placeholderTextColor="#ecf0f1"
          returnKeyType="next"       
          style={styles.input}
          onChangeText={(countryInput) => this.setState({countryInput})}
          value={this.state.countryInput}
          />
        <TouchableOpacity style={styles.buttonContainer} onPress={getWeather}>
          <Text style={styles.buttonText}>GET WEATHER</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
   logo: {
    color: '#FFF',
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    top: 80
  },
  input: {
    height: 40,
    marginBottom: 20,
    backgroundColor: '#8e44ad',
    color: '#ecf0f1',
    paddingHorizontal: 10,
    borderRadius: 6
  },
  buttonContainer: {
    backgroundColor: '#8e44ad',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'

  },
  formContainer: {
    padding: 20,
  },
});
