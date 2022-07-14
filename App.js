import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Quote from './components/Quote/quote';
import Suv from './components/Vehicles/suv';
import About from './components/About/about';


function HomeScreen() {
  return (
    <View>
      <Image style={styles.myimage}
      source={require('./assets/home.jpg')} />

    </View>
  );
}

function AboutScreen() {
  return (
    <View>
      <About />

    </View>
  );
}

function VehiclesScreen() {
  return (
    <View>
      <Suv />
     
    </View>
  );
}

function QuoteScreen() {
  return (
    <View>
      <Text style={styles.mytext}>Visit us at Motorcity Bagatelle or request a quote below:</Text>
      <Quote />    
     
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="ABOUT" component={AboutScreen} />
        <Tab.Screen name="VEHICLES" component={VehiclesScreen} />
        <Tab.Screen name="GET QUOTE" component={QuoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  myimage: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  mytext: {
    marginLeft: 12,
    paddingBottom: 8,
    paddingTop: 5,
  },
  

});