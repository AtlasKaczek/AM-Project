import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, ScrollView, Modal, FlatList } from "react-native";
import { styles } from "./style";

const countries = ["USA", "Canada", "Poland", "Germany", "France", "UK", "Italy", "Spain"]; 
const interestsData = ["Sport", "Muzyka", "Podróże", "Gry", "Film", "Książki", "Gotowanie", "Sztuka", "Moda"];

export function ProfileSettings({ navigation }) {
  const [username, setUsername] = useState("Username");
  const [profileImage, setProfileImage] = useState(require('../../img/Profil.png'));
  const [fullName, setFullName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [phone, setPhone] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [interestModalVisible, setInterestModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSaveChanges = () => {
    // Trzeba będzie dodać obsługę
  };

  const handleChangeProfileImage = () => {
    // Trzeba będzie dodać obsługę
  };

  const handleOpenInterestModal = () => {
    setInterestModalVisible(true);
  };

  const handleCloseInterestModal = () => {
    setInterestModalVisible(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryModalVisible(false);
  };
  const handleInterestSelect = (interest) => {
    // Obsługa wyboru zainteresowania
    setSelectedInterests((prevInterests) => [...prevInterests, interest]);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={[styles.arrowIcon]}
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

      {/* Edycja pełnego imienia i nazwiska */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Imię i nazwisko:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>

      {/* Wybór kraju */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kraj:</Text>
        <TouchableOpacity onPress={() => setCountryModalVisible(true)}>
          <Text style={styles.picker}>{selectedCountry}</Text>
        </TouchableOpacity>
      </View>

      {/* Edycja numeru telefonu */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numer telefonu:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>

      {/* Wybór zainteresowań */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Zainteresowania:</Text>
        <TextInput
          style={styles.input}
          value={selectedInterests.join(', ')}
          onFocus={handleOpenInterestModal}
        />
      </View>

      {/* Przycisk do zapisywania zmian */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
      </TouchableOpacity>

      {/* Modal z wyborem zainteresowań */}
      <Modal
        visible={interestModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseInterestModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.interestModalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseInterestModal}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <FlatList
              data={interestsData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.interestItem}
                  onPress={() => handleInterestSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Modal z wyborem kraju */}
      <Modal
        visible={countryModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCountryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.interestModalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCountryModalVisible(false)}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <FlatList
              data={countries}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.interestItem}
                  onPress={() => handleCountrySelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
