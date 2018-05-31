import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Value = props => (
	<View>
       {/* <Text style={styles.title}> { props.city }, { props.country }</Text> */}
	 	  <Text style={styles.title}>
        <Text style={{ fontWeight: 'normal', color: '#c8d6e5'}}>
          Temperature: &nbsp;
        </Text> 
        { props.temperature }
      </Text>
      <Text style={styles.title}>
        <Text style={{ fontWeight: 'normal', color: '#c8d6e5'}}>
          Humidity: &nbsp;
        </Text> 
        { props.humidity }
      </Text>
      <Text style={styles.title}>
        <Text style={{ fontWeight: 'normal', color: '#c8d6e5'}}>
          Description: &nbsp;
        </Text> 
        { props.description }
      </Text>
      {/* {
        props.city == 'Paris'
        ? <Image
            style={{width: 280, height: 250, top: 125}}
            source={{uri: 'http://ladounedesvillesgangandeschamps.fr/wp-content/uploads/2014/06/rat02.jpg'}}
          />
      : 
      // <Image
      //     style={{width: 250, height: 250, top: 125}}
      //     source={{uri: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'}}
      //   />
      <View></View>
      } */}
	</View>
);

export default Value;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    top: 100
  }
});