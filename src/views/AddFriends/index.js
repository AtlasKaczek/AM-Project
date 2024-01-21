import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";
import { auth, database, storage } from "../../database/firebaseConfig";
import { set, ref, get, push } from 'firebase/database';
  
export function AddFriends() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [friendsData, setFriendsData] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchData = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDatabase = ref(database, `users`);
        const snapshot = await get(userDatabase);
        const usersData = snapshot.val();

        if (usersData) {
          const userIds = Object.keys(usersData);

          const userDataPromises = userIds.map(async (userId) => {
            const userRef = ref(database, `users/${userId}`);
            const userSnapshot = await get(userRef);
            const userData = userSnapshot.val();
  
            if (userData) {
              return {
                id: userId,
                username: userData.username,
                image: userData.photoURL ? { uri: userData.photoURL } : require('../../img/Profil.png'),
                country: userData.country,
                phone: userData.phone,
                interests: userData.selectedInterests,
                fullName: userData.fullName,
              };
            } else {
              console.log(`No user data found for user with ID: ${userId}`);
              return null;
            }
          });
  
          const userDataArray = await Promise.all(userDataPromises);
  
          const userList = userDataArray.filter((userData) => userData !== null);
          return userList;
        } else {
          console.log("No info found for the user.");
          return [];

        }
      } catch (error) {
        console.error("Error getting user list:", error.message);
        return [];
      }
    } else {
      console.error("User not authenticated.");
      return [];
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchData();
      setFriendsData(data);
    };

    fetchUsers();
  }, []);

  const handleAddFriend = async (friendId) => {
    console.log(friendId);
    const user = auth.currentUser;
    if (user) {
      try {
        const userFriendListRef = ref(database, `users/${user.uid}/friendlist`);
        const newfriendRef = await push(userFriendListRef, friendId);
        console.log("Dodano znajomego: ", friendId);

      } catch(error){
        console.error("error: ", error);
      }
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);

    // Filtruj znajomych na podstawie wprowadzonego tekstu
    const filteredFriends = initialFriendsData.filter((friend) =>
      friend.username.toLowerCase().includes(text.toLowerCase())
    );

    setFriendsData(filteredFriends);
  };

  const handleFriendDetails = (friend) => {
    // Wyświetl szczegóły  w modalu
    setSelectedFriend(friend);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    // Zamknij modal
    setModalVisible(false);
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
        <Text style={styles.headerText}>Dodaj znajomego</Text>
      </View>

      {/* Pole do przeszukiwania znajomych */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../../img/lupa.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Szukaj znajomych"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>

      {/* Lista ludzi do dodania */}
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleFriendDetails(item)}>
            <View style={styles.friendItem}>
              <Image
                source={item.image}
                style={styles.friendImage}
              />
              <Text style={styles.friendUsername}>{item.username}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal ze szczegółami */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Image
                source={require('../../img/closeIcon.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Text style={styles.friendUsernameDetails}>{selectedFriend?.fullName}</Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Nazwa użytkownika:</Text> {selectedFriend?.username}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Kraj:</Text> {selectedFriend?.country}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Telefon:</Text> {selectedFriend?.phone}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Zainteresowania:</Text> {selectedFriend?.interests ? selectedFriend?.interests.join(', '): ""}
            </Text>
            <TouchableOpacity style={styles.addButton} onPress={()=>handleAddFriend(selectedFriend?.id)}>
              <Text style={styles.addButtonText}>Dodaj znajomego</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
