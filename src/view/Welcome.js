import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Welcome extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Text style={styles.title}>
            Weather App&nbsp;
            <MaterialCommunityIcons name="weather-partlycloudy" size={50} style={styles.logo} />
          </Text>
        </View>
        <View style={styles.formContainer}>
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
    justifyContent: 'center'
  },
   logo: {
    color: '#FFF',
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
    
  },
});
