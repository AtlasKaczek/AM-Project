import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./style";

export function SecuritySettings({ navigation }) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    // Trzeba bedzie dac osbluge zmiany hasla
  };

  const handleChangeEmail = () => {
    // dodac obsluge zmiany email
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ustawienia Bezpieczeństwa</Text>
      </View>

      {/* Zmiana hasła */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Aktualne hasło:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nowe hasło:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
        <Text style={styles.saveButtonText}>Zmień hasło</Text>
      </TouchableOpacity>

      {/* Zmiana adresu e-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nowy adres e-mail:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleChangeEmail}>
        <Text style={styles.saveButtonText}>Zmień e-mail</Text>
      </TouchableOpacity>
    </View>
  );
}
