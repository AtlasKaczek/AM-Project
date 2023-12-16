import {styles} from "./style";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleLogin = () => { 
    console.log('Próba logowania:', username, password);
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>Zaczynajmy!</Text>
      <Text style={styles.title}>Zaloguj się, aby uzyskać dostęp do swojego kalendarza</Text>
      <TextInput
        style={styles.input}
        placeholder="Nazwa użytkownika"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleRememberMe}>
        <View style={[styles.checkbox, rememberMe && styles.checkboxActive]}>
          {rememberMe && <View style={styles.checkboxCheckmark} />}
        </View>
        <Text style={styles.checkboxLabel}>Zapamiętaj mnie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Zaloguj się</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
        <Text style={styles.registerButtonText}>Nie masz konta? Zarejestruj się!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}