import React , { useState, useEffect } from 'react' ; 
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
button1:{
  alignItems: 'center',
  backgroundColor: 'green',
  padding: 20,
  marginBottom: 10,
  marginTop: 10,
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  }
},
button2:{
  alignItems: 'center',
  backgroundColor: 'red',
  padding: 20,
  marginBottom: 10,
  marginTop: 10
},
pureButton:{
  marginBottom: 10
}
});

export default function App() {
  const [ count, setCount ] = useState(0);
  const [ string, setString ] = useState('');

  useEffect(() => {
    setCount(count+1);
  }, [string])

  return (
    <View style={styles.container}>
      <Text>Counter: {count} </Text>
      <Text>Input value: {string} </Text>
    <TouchableOpacity
     style={styles.button1} 
     onPress={() => setCount(count+1)} 
     title='Click Me!'>
     <Text>
Click Me to ++
       </Text>
    
   </TouchableOpacity>
       <TextInput 
       placeholder='Input something pls!'
       onChangeText={setString}
       style={styles.input}/>
    </View>
  );
}