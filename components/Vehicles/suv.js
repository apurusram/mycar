import React from 'react';
import { StyleSheet, Text, ScrollView, Image} from "react-native";
const Suv = () => {

    return (

        <ScrollView style={styles.container}>
        <Text style={styles.heading}>Our Fleet</Text>   
        <Image style={styles.myimage}
        source={require('../../assets/suv1.jpg')} />

        <Text style={styles.suvname}>RVN H7</Text>
        
        <Text style={styles.features}>
        <Image source={require('../../assets/check.png')} /> 1.5L Turbo engine {'\n'} 
        <Image source={require('../../assets/check.png')} /> Dual Clutch 7-Speed {'\n'} 
        <Image source={require('../../assets/check.png')} /> Secondary Collision Mitigation {'\n'} 
        <Image source={require('../../assets/check.png')} /> Curve Brake Control {'\n'} 
        <Image source={require('../../assets/check.png')} /> Roll Movement Intervention {'\n'} 
        <Image source={require('../../assets/check.png')} /> Hill Descent/Hold Control
        </Text>
 
        <Image style={styles.myimage}
        source={require('../../assets/suv2.jpg')} />
        <Text style={styles.suvname}>RVN H7 HEV</Text>
        <Text style={styles.features}>
        <Image source={require('../../assets/check.png')} /> 1.5 L Turbo Hybrid {'\n'} 
        <Image source={require('../../assets/check.png')} /> DHT Transmission {'\n'} 
        <Image source={require('../../assets/check.png')} /> Adjustable Energy Recovery Level {'\n'} 
        <Image source={require('../../assets/check.png')} /> Wireless Charger {'\n'} 
        <Image source={require('../../assets/check.png')} /> 360 Omniview Camera {'\n'} 
        <Image source={require('../../assets/check.png')} /> Fully Automatic Parking
        </Text>

        <Image style={styles.myimage}
        source={require('../../assets/suv3.jpg')} />

        <Text style={styles.suvname}>RVN Magnum</Text>
        <Text style={styles.features}>
        <Image source={require('../../assets/check.png')} /> 1.5L Turbo engine {'\n'} 
        <Image source={require('../../assets/check.png')} /> Automatic Transmission {'\n'} 
        <Image source={require('../../assets/check.png')} /> Automatic headlamps & wiper {'\n'} 
        <Image source={require('../../assets/check.png')} /> Paddle shift {'\n'} 
        <Image source={require('../../assets/check.png')} /> Touch Screen {'\n'} 
        <Image source={require('../../assets/check.png')} /> Reverse Camera
        </Text>

        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        shadowColor: '#000',        
      },
      myimage: {
        height: 186,
        width: 325,
        alignSelf: 'center',   
      },
      suvname: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
      },
      features: {
        lineHeight: 30,
        fontSize: 15,
        padding: 10
      },
      heading: {
        textTransform: 'uppercase',
        color: '#007bff',
        fontSize: 20,
        paddingLeft: 10,
        marginTop: 40,
      }

    });













export default Suv;