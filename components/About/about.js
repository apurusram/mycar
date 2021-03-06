import React from 'react';
import { StyleSheet, Text, View, Image} from "react-native";

const About = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>About us</Text>
        <Text style={styles.about}>RVN is a specialist manufacturer of premium SUVs and has been on the market for 10 years.
        Our success is due to a combination of commitment, passion and listening to our customers.
        We take the best features, safety and technologies from around the world to produce the best SUV we can.{'\n'} {'\n'} 
        Please feel free to browse our SUVs and can check the relevant specs.{'\n'} {'\n'} 
        Visit us at Motorcity Bagatelle, Moka to check the vehicle in person
        and you may call us on 253 0000 for any query.
        </Text>     
        <Image style={styles.myimage}
        source={require('../../assets/map.png')} />     
        </View>         
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',    
      },
      myimage: {
        height: 250,
        width: 400,      
      },      
      about: {
        padding: 20,
        lineHeight: 20,
        textAlign: 'justify'
      },
      heading: {
        textTransform: 'uppercase',
        color: '#007bff',
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 40,
      }      
    });

export default About;