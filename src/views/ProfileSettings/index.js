import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, ScrollView, Modal, FlatList } from "react-native";
import { styles } from "./style";
import { auth, database, storage } from "../../database/firebaseConfig"; // Zaktualizowano importy
import { set, ref, get } from 'firebase/database';
import { updateProfile } from "firebase/auth"
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Importujemy funkcje z Firebase Storage

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
        setFullName(userData.fullName ? userData.fullName : "");
        setCountry(userData.country ? userData.country : "Poland");
        setPhone(userData.phone ? userData.phone : "");
        setSelectedInterests(userData.selectedInterests ? userData.selectedInterests : []);
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

        // Przesyłanie zdjęcia do Firebase Storage i uzyskiwanie URL
        if (profileImage) {
          const imageUri = profileImage.uri;
          const imageName = `${user.uid}_profile_picture.jpg`;
          const imageRef = storageRef(storage, `Profile Pictures/${imageName}`);
          const blob = await fetch(imageUri).then((response) => response.blob());

          const uploadTask = uploadBytesResumable(imageRef, blob);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Postęp przesyłania zdjęcia: ${progress}%`);
            },
            (error) => {
              console.error("Błąd podczas przesyłania zdjęcia:", error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log("Pomyślnie przesłano i pobrano URL:", downloadURL);
              
              updateProfile(auth.currentUser, {
                displayName: username, photoURL: downloadURL
              })
              const updatedUserData = {
                ...userData,
                photoURL: downloadURL, // Aktualizujemy URL zdjęcia
                username: username,
                fullName: fullName,
                country: country,
                phone: phone,
                selectedInterests: selectedInterests,
                email: currentEmail,
              };
      
              await set(ref(database, `users/${user.uid}`), updatedUserData);
              navigation.navigate('Profile');
            }
          );
        } else {
          // Jeśli nie ma nowego zdjęcia, aktualizujemy tylko inne dane użytkownika
          const updatedUserData = {
            ...userData,
            username: username,
            fullName: fullName,
            country: country,
            phone: phone,
            selectedInterests: selectedInterests,
            email: currentEmail,
          };
  
          await set(ref(database, `users/${user.uid}`), updatedUserData);
          navigation.navigate('Profile');
        }
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
          <Image
            source={profileImage ? profileImage : require('../../img/Profil.png')}
            style={styles.profileImage}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleOpenImagePicker}>
          <Text style={styles.changeImageText}>Zmień zdjęcie profilowe</Text>
        </TouchableOpacity>
      </View>

      {/* Modal wyboru zdjęcia profilowego */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={imagePickerModalVisible}
        onRequestClose={() => {
          setImagePickerModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.imagePickerModalContent}>
            <TouchableOpacity onPress={handleOpenCamera} style={styles.imagePickerButton}>
              <Text style={styles.imagePickerButtonText}>Zrób zdjęcie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenGallery} style={styles.imagePickerButton}>
              <Text style={styles.imagePickerButtonText}>Wybierz z galerii</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setImagePickerModalVisible(false)}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Pole na nazwę użytkownika */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nazwa użytkownika</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>

      {/* Pole na imię i nazwisko */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Imię i nazwisko</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
      </View>

      {/* Pole na kraj */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kraj</Text>
        <TouchableOpacity onPress={() => setCountryModalVisible(true)}>
          <Text style={styles.input}>{country}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal wyboru kraju */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={countryModalVisible}
        onRequestClose={() => {
          setCountryModalVisible(false);
        }}
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
                <TouchableOpacity onPress={() => handleCountrySelect(item)} style={styles.interestItem}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Pole na numer telefonu */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numer telefonu</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>

      {/* Zainteresowania */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Zainteresowania</Text>
        <TouchableOpacity onPress={handleOpenInterestModal}>
          <Text style={styles.input}>{selectedInterests.join(", ")}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal wyboru zainteresowań */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={interestModalVisible}
        onRequestClose={() => {
          setInterestModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.interestModalContent}>
            <FlatList
              data={interestsData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleInterestSelect(item)} style={styles.interestItem}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseInterestModal}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Przycisk Zapisz zmiany */}
      <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
