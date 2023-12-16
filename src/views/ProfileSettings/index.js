import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput } from "react-native";
import { styles } from "./style";

export function ProfileSettings({ navigation }) {
  const [username, setUsername] = useState("Username");
  const [profileImage, setProfileImage] = useState(require('../../img/Profil.png'));

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSaveChanges = () => {
    // Trzeba będzie dodać obsługę
  };

  const handleChangeProfileImage = () => {
    // Trzeba będzie dodać obsługę
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={[styles.arrowIcon, { width: 30, height: 30 }]}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ustawienia - Profil</Text>
      </View>

      {/* Zmiana zdjęcia profilowego */}
      <View style={styles.profileImageContainer}>
        <TouchableWithoutFeedback onPress={handleChangeProfileImage}>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleChangeProfileImage}>
          <Text style={styles.changeImageText}>Zmień zdjęcie profilowe</Text>
        </TouchableOpacity>
      </View>

      {/* Edycja nazwy użytkownika */}
      <View style={styles.usernameContainer}>
        <Text style={styles.label}>Nazwa użytkownika:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      {/* Przycisk do zapisywania zmian */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
      </TouchableOpacity>
    </View>
  );
}
