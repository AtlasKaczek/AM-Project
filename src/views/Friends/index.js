import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";
import { auth, database, storage } from "../../database/firebaseConfig";
import { set, ref, get } from 'firebase/database';

export function Friends() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [friendsData, setFriendsData] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchData = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userFriendListRef = ref(database, `users/${user.uid}/friendlist/`);
        const snapshot = await get(userFriendListRef);
        const friendListData = snapshot.val();

        if (friendListData) {
          const friendIds = Object.values(friendListData);

          const friendDataPromises = friendIds.map(async (friendId) => {
            const userRef = ref(database, `users/${friendId}`);
            const userSnapshot = await get(userRef);
            const userData = userSnapshot.val();
  
            if (userData) {
              return {
                id: friendId,
                username: userData.username,
                image: userData.photoURL ? { uri: userData.photoURL } : require('../../img/Profil.png'),
                country: userData.country,
                phone: userData.phone,
                interests: userData.selectedInterests,
                fullName: userData.fullName,
              };
            } else {
              console.log(`No user data found for friend with ID: ${friendId}`);
              return null;
            }
          });
  
          const friendDataArray = await Promise.all(friendDataPromises);
  
          const friendList = friendDataArray.filter((friendData) => friendData !== null);
          return friendList;
        } else {
          console.log("No friends found for the user.");
          return [];

        }
      } catch (error) {
        console.error("Error getting event list:", error.message);
        return [];
      }
    } else {
      console.error("User not authenticated.");
      return [];
    }
  };

  useEffect(() => {
    const fetchFriends = async () => {
      const data = await fetchData();
      setFriendsData(data);
    };

    fetchFriends();
  }, []);

  const handleAddFriend = () => {
    navigation.navigate('AddFriends');
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
    // Wyświetl szczegóły znajomego w modalu
    setSelectedFriend(friend);
    setModalVisible(true);
  };

  const handleRemoveFriend = () => {
    // Usuń znajomego z listy
    if (selectedFriend) {
      const updatedFriends = friendsData.filter((friend) => friend.id !== selectedFriend.id);
      setFriendsData(updatedFriends);
      setModalVisible(false); //to takie tymczasowe usuwanie, żeby było widać że znika xddd
    }
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
        <Text style={styles.headerText}>Znajomi</Text>
        <TouchableOpacity onPress={handleAddFriend} style={styles.addButton}>
          <Image
            source={require('../../img/Dodaj.png')}
            style={styles.addIcon}
          />
        </TouchableOpacity>
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

      {/* Lista znajomych */}
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

      {/* Modal ze szczegółami znajomego */}
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
              <Text style={{ fontWeight: 'bold' }}>Zainteresowania:</Text> {selectedFriend?.interests.join(', ')}
            </Text>
            <TouchableOpacity style={styles.removeButton} onPress={handleRemoveFriend}>
              <Text style={styles.removeButtonText}>Usuń znajomego</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
