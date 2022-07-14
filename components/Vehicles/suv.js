import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Image} from "react-native";



const Suv = () => {



    return (

        <View style={styles.container}>
       

        <Image style={styles.myimage}
        source={require('../../assets/suv1.jpg')} />

        <Text style={styles.suvname}>RVN H7</Text>
        <Text style={styles.features}>
        1.5L Turbo engine {'\n'} 
        Dual Clutch 7-Speed {'\n'} 
        Secondary Collision Mitigation {'\n'} 
        Curve Brake Control {'\n'} 
        Roll Movement Intervention {'\n'} 
        Hill Descent/Hold Control
        </Text>


        </View>
      
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'fff',
      },
      myimage: {
        height: 250,
        width: '100%',
        
        
      },

      suvname: {
        fontWeight: 600,
        fontSize: 20,
        textAlign: 'center',
      }
    
      
    });













export default Suv;