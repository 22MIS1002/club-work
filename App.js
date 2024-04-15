import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [registerNumber, setRegisterNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Register Number:', registerNumber);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>📚 Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Register Number"
        onChangeText={(text) => setRegisterNumber(text)}
        value={registerNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCCC', // Light pink color
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
