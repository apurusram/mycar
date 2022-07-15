import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <Text style={styles.heading}>Get a quote</Text>
      <Text style={styles.mytext}>Visit us at Motorcity Bagatelle, Moka or request a quote below:</Text>
      <Quote />    
     
      
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HOME" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          />
        <Tab.Screen 
          name="ABOUT" 
          component={AboutScreen} 
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
          />
        <Tab.Screen 
          name="VEHICLES" 
          component={VehiclesScreen} 
          options={{
            tabBarLabel: 'Vehicles',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="car-back" color={color} size={26} />
            ),
          }}
          />
        <Tab.Screen 
          name="GET QUOTE" 
          component={QuoteScreen} 
          options={{
            tabBarLabel: 'Get Quote',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="form-select" color={color} size={26} />
            ),
          }}
          />
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
  heading: {
    textTransform: 'uppercase',
    color: '#007bff',
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 40,
  }
  

});