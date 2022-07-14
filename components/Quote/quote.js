import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Pressable, Image} from "react-native";
import SelectList from 'react-native-dropdown-select-list';





const Quote = () => {
  

  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1',value:'Cash'},
    {key:'2',value:'Lease'}
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
    <Text style={styles.label}>Select your payment method*</Text>
    <View style={styles.myselect}>
      <SelectList 
      setSelected={setSelected} 
      data={data}     
      />
      </View>

      <Pressable 
        style={styles.button}
        content={"Submit"}
        onPress={() => {
          alert("Thank you for your inquiry. We will get back soon.")
        }}>

        <Text style={styles.btext}>SUBMIT</Text>

        </Pressable>

        <Image style={styles.map}
      source={require('../../assets/map.png')} />

      
    

     
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
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171A20',

  },
  btext: {
    color: 'fff',
    
  },
  map: {
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    
  }




  
});

export default Quote;