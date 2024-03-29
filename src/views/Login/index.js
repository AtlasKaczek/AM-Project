import {styles} from "./style";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import { auth, database } from "../../database/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";

export function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => { 
    console.log('Próba logowania:', username, password);
    if (!username || !password ) {
      setLoginError("Wszystkie pola muszą być wypełnione!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);

      // dodanie contextu

      navigation.navigate('Profile');
    } catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
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
      {loginError && (
        <Text style={styles.errorText}>{loginError}</Text>
      )}
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