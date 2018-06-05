import React, { Component } from 'react';
import { StyleSheet, View, ListView, Text, KeyboardAvoidingView, TextInput, Keyboard, TouchableOpacity, } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator} from 'react-navigation';

import Value from '../components/Value'

class Welcome extends Component {

  static navigationOptions = {
    title: 'Weather App',
    headerStyle: {
      backgroundColor: '#222f3e',
      borderBottomColor: '#a4b0be'
    },
    headerTitleStyle: {
        color: '#FFF',
        fontSize: 25
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      cityInput: "",
      countryInput: "",
    };
  }

  submit() {
    Keyboard.dismiss()
    this.state.cityInput == ""
    ? null
    :     this.state.countryInput == ""
    ? null
    : this.props.navigation.navigate('Result', {city: this.state.cityInput, country: this.state.countryInput})
  }
  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
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
          returnKeyType="go"       
          onSubmitEditing={() => this.submit()}
          style={styles.input}
          onChangeText={(countryInput) => this.setState({countryInput})}
          value={this.state.countryInput}
          />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.submit()}>
          <Text style={styles.buttonText}>GET WEATHER</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default createStackNavigator ({
  Search: {
    screen: Welcome
  },
  Result: {
    screen: Value
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222f3e'
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
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 18
  },
  buttonContainer: {
    backgroundColor: '#34495e',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18

  },
  formContainer: {
    padding: 20,
  },
});
