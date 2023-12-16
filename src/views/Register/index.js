import { styles } from "./style";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from "react-native";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassowrd1] = useState("");
  const [consent, setConsent] = useState(false);

  const handleLogin = () => {
    console.log("Zarejestrowano", username, email, password, password1);
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
        secureTextEntry
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Zarejestruj się</Text>
      </TouchableOpacity>
    </View>
  );
}
