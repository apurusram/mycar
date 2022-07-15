import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Pressable, ActivityIndicator, Animated, LogBox } from "react-native";
import SelectList from 'react-native-dropdown-select-list';

const Quote = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,      
      duration: 5000,
    }).start();
  };

  fadeIn();


  const [loading, setLoad] = useState(false);
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1',value:'H7'},
    {key:'2',value:'H7 HEV'},
    {key:'3',value:'Magnum'}
  ];

  return (
    <SafeAreaView>    
      <Text style={styles.label}>Full Name*</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={onChangeText}
        value={text || ''}
      />
      <Text style={styles.label}>Email Address*</Text>
      <TextInput
        placeholder="Provide your email"
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1 || ''}
      /> 
     <Text style={styles.label}>Mobile Number*</Text>
     <TextInput
        placeholder="Provide a contact number"
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number || ''}
        keyboardType="numeric"
      /> 
    <Text style={styles.label}>SUV you are interested in*</Text>
    <View style={styles.myselect}>
      <SelectList 
      setSelected={setSelected} 
      data={data}     
      />
      </View>

      <ActivityIndicator size="large"
        animating={loading}/>

      <Animated.View
      
      style={[
        styles.fadingContainer,
        {
          // Bind opacity to animated value
          opacity: fadeAnim
        }
      ]}
       >

<Pressable 
        style={styles.button}
        content={"Submit"}
        onPress={() => {     
          setLoad(!loading)
          setTimeout(function(){
            setLoad(loading)
            alert("Thank you for your inquiry. We will get back soon.")                        
          }, 3000)
        }}
      
        >



        <Text style={styles.btext}>SUBMIT</Text>
        </Pressable>


      
 
    </Animated.View>

      

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,    
  },
  label: {
    marginLeft:12,
    fontWeight: 'bold',
  },
  myselect: {
    height: 40,
    margin: 12,   
  },
  button: {
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171A20',
    marginTop: 90,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: 20,
    paddingLeft: 20,
  },
  btext: {
    color: '#ffffff',    
  },

});

export default Quote;