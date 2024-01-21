import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, ScrollView, Modal, FlatList } from "react-native";
import { styles } from "./style";
import { auth, database } from "../../database/firebaseConfig";
import { set, ref, get } from 'firebase/database';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const countries = ["USA", "Canada", "Poland", "Germany", "France", "UK", "Italy", "Spain"]; 
const interestsData = ["Sport", "Muzyka", "Podróże", "Gry", "Film", "Książki", "Gotowanie", "Sztuka", "Moda"];

export function ProfileSettings({ navigation }) {
  const [username, setUsername] = useState("Username");
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("Poland");
  const [phone, setPhone] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [interestModalVisible, setInterestModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [imagePickerModalVisible, setImagePickerModalVisible] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentEmail(user.email);
      (async () => {
        const userSnapshot = await get(ref(database, `users/${user.uid}`));
        const userData = userSnapshot.val();
        if (userData && userData.photoURL) {
          setProfileImage({ uri: userData.photoURL });
        }
        
        setUsername(userData ? userData.username : "");
        setFullName(userData ? userData.fullName : "");
        setCountry(userData ? userData.country : "Poland");
        setPhone(userData ? userData.phone : "");
        setSelectedInterests(userData ? userData.selectedInterests : []);
      })();
    }

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log("Użytkownik nie udzielił uprawnień do aparatu.");
      }
    })();

    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log("Użytkownik nie udzielił uprawnień do galerii.");
      }
    })();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSaveChanges = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        const userSnapshot = await get(ref(database, `users/${user.uid}`));
        const userData = userSnapshot.val();

        const updatedUserData = {
          ...userData,
          photoURL: profileImage ? profileImage.uri : userData.photoURL,
          username: username,
          fullName: fullName,
          country: country,
          phone: phone,
          selectedInterests: selectedInterests,
          email: currentEmail,
        };
  
        await set(ref(database, `users/${user.uid}`), updatedUserData);
  
        navigation.navigate('Profile');
  
      } catch (error) {
        console.error("Błąd podczas zapisywania zmian:", error);
      }
    }
  };

  const handleOpenImagePicker = async () => {
    setImagePickerModalVisible(true);
  };

  const handleOpenCamera = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    };

    const result = await ImagePicker.launchCameraAsync(options);

    if (!result.cancelled) {
      const newProfileImage = { uri: result.uri };
      setProfileImage(newProfileImage);
    }
  };

  const handleOpenGallery = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      const newProfileImage = { uri: result.uri };
      setProfileImage(newProfileImage);
    }

    setImagePickerModalVisible(false);
  };
  
  const handleOpenInterestModal = () => {
    setInterestModalVisible(true);
  };

  const handleCloseInterestModal = () => {
    setInterestModalVisible(false);
  };

  const handleCountrySelect = (country) => {
    setCountry(country);
    setCountryModalVisible(false);
  };
  
  const handleInterestSelect = (interest) => {
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
        <TouchableWithoutFeedback onPress={handleOpenImagePicker}>
          {profileImage ? (
            <Image source={profileImage} style={styles.profileImage} />
          ) : (
            <Image source={require('../../img/Profil.png')} style={styles.profileImage} />
          )}
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleOpenImagePicker}>
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
          <Text style={styles.picker}>{country}</Text>
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

      {/* Modal z wyborem źródła zdjęcia */}
      <Modal
        visible={imagePickerModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setImagePickerModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imagePickerModalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setImagePickerModalVisible(false)}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleOpenCamera}
            >
              <Text style={styles.imagePickerButtonText}>Zrób zdjęcie aparatem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleOpenGallery}
            >
              <Text style={styles.imagePickerButtonText}>Wybierz z galerii</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
