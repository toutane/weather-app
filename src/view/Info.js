import React, { Component } from 'react';
import { StyleSheet, View, ListView, Text, KeyboardAvoidingView, TextInput, Keyboard, TouchableOpacity, } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator} from 'react-navigation';

class Info extends Component {

  static navigationOptions = {
    title: 'About this app',
    headerStyle: {
        backgroundColor: '#8e44ad'
    },
    headerTitleStyle: {
        color: '#FFF',
        fontSize: 25
    }
  }

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

export default createStackNavigator ({
  Search: {
    screen: Info
  }
})

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
    borderRadius: 6,
    fontSize: 18
  },
  buttonContainer: {
    backgroundColor: '#8e44ad',
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
