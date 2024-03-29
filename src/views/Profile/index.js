import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { auth, database } from "../../database/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { get, ref } from 'firebase/database';

export function Profile() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(require('../../img/Profil.png'));

  const navigation = useNavigation();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName);
      setEmail(user.email);

      (async () => {
        const userSnapshot = await get(ref(database, `users/${user.uid}`));
        const userData = userSnapshot.val();

        if (userData && userData.photoURL) {
          setProfileImage({ uri: userData.photoURL });
        }
      })();
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        // Obsłuż błędy
      });
  };

  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const handleNavigateToCalendar = () => {
    navigation.navigate('DrawerNav');
  };

  const handleNavigateToFriends = () => {
    navigation.navigate('Friends');
  };

  const handleNavigateToFAQ = () => {
    navigation.navigate('FAQ');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      {/* Zdjęcie profilowe, nazwa użytkownika i email */}
      <View style={styles.profileInfoContainer}>
        <Image
          source={profileImage}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{userName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>

      {/* Komponent "Calendar" */}
      <TouchableOpacity style={styles.listItem} onPress={handleNavigateToCalendar}>
        <Image
          source={require('../../img/calendar.png')}
          style={styles.icon1}
        />
        <Text style={styles.label}>Calendar</Text>
      </TouchableOpacity>

      {/* Komponent "Znajomi" */}
      <TouchableOpacity style={styles.listItem} onPress={handleNavigateToFriends}>
        <Image
          source={require('../../img/znajomi.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>Znajomi</Text>
      </TouchableOpacity>

      {/* Komponent "Ustawienia" */}
      <TouchableOpacity style={styles.listItem} onPress={handleNavigateToSettings}>
        <Image
          source={require('../../img/ustawienia.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>Ustawienia</Text>
      </TouchableOpacity>

      {/* Komponent "FAQ" */}
      <TouchableOpacity style={styles.listItem} onPress={handleNavigateToFAQ}>
        <Image
          source={require('../../img/faq.png')}
          style={styles.icon}
        />
        <Text style={styles.label}>FAQ</Text>
      </TouchableOpacity>

      {/* Przycisk "Wyloguj się" */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Wyloguj się</Text>
      </TouchableOpacity>
    </View>
  );
}
