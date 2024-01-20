import { styles } from "./style";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { auth, database } from "../../database/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"

export function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [consent, setConsent] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const handleLogin = async () => {
    if (!username || !email || !password || !password1 || !consent) {
      setRegistrationError("Wszystkie pola muszą być wypełnione!");
      return;
    }

    if (password !== password1) {
      setRegistrationError("Hasła muszą być takie same!");
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await set(ref(database ,'users/' + user.uid), {
        username,
        email,
      });

      console.log("User created with username:", username);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      setRegistrationError(error.message);
    }
  };

  const toggleConstent = () => {
    setConsent(!consent);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>Rejestracja</Text>
      <Text style={styles.title}>
        Utwórz konto, aby móc korzystać z aplikacji.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nazwa użytkownika"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Adres e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Potwierdź Hasło"
        secureTextEntry
        onChangeText={(text) => setPassword1(text)}
        value={password1}
      />

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={toggleConstent}
      >
        <View style={[styles.checkbox, consent && styles.checkboxActive]}>
          {consent && <View style={styles.checkboxCheckmark} />}
        </View>
        <Text style={styles.checkboxLabel}>
          Wyrażam zgodę na warunki korzystania z aplikacji
        </Text>
      </TouchableOpacity>
      {registrationError && (
        <Text style={styles.errorText}>{registrationError}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Zarejestruj się</Text>
      </TouchableOpacity>
    </View>
  );
}
