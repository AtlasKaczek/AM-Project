import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";

const initialFriendsData = [
  { id: '1', username: 'JohnDoe', image: require('../../img/Profil.png'), country: 'USA', phone: '123-456-789', interests: ['Sport', 'Muzyka'], fullName: 'John Doe' },
  { id: '2', username: 'JaneSmith', image: require('../../img/Profil.png'), country: 'Canada', phone: '987-654-321', interests: ['Podróże', 'Książki'], fullName: 'Jane Smith' },
  { id: '3', username: 'AliceJohnson', image: require('../../img/Profil.png'), country: 'UK', phone: '555-123-456', interests: ['Film', 'Gotowanie'], fullName: 'Alice Johnson' },
  { id: '4', username: 'BobWilliams', image: require('../../img/Profil.png'), country: 'Australia', phone: '123-789-456', interests: ['Gry', 'Sztuka'], fullName: 'Bob Williams' },
  { id: '5', username: 'CharlieDavis', image: require('../../img/Profil.png'), country: 'Germany', phone: '987-321-654', interests: ['Podróże', 'Sport'], fullName: 'Charlie Davis' },
  { id: '6', username: 'DianaMoore', image: require('../../img/Profil.png'), country: 'France', phone: '555-456-789', interests: ['Muzyka', 'Moda'], fullName: 'Diana Moore' },
  { id: '7', username: 'EthanTaylor', image: require('../../img/Profil.png'), country: 'Japan', phone: '123-456-789', interests: ['Książki', 'Film'], fullName: 'Ethan Taylor' },
  { id: '8', username: 'FionaClark', image: require('../../img/Profil.png'), country: 'Italy', phone: '987-654-321', interests: ['Gotowanie', 'Sztuka'], fullName: 'Fiona Clark' },
  { id: '9', username: 'GeorgeSmith', image: require('../../img/Profil.png'), country: 'Brazil', phone: '555-123-456', interests: ['Podróże', 'Gry'], fullName: 'George Smith' },
  { id: '10', username: 'HannahBrown', image: require('../../img/Profil.png'), country: 'Russia', phone: '123-789-456', interests: ['Sport', 'Film'], fullName: 'Hannah Brown' },
  { id: '11', username: 'IsaacWilson', image: require('../../img/Profil.png'), country: 'India', phone: '987-321-654', interests: ['Moda', 'Muzyka'], fullName: 'Isaac Wilson' },
  { id: '12', username: 'JessicaHall', image: require('../../img/Profil.png'), country: 'China', phone: '555-456-789', interests: ['Sztuka', 'Podróże'], fullName: 'Jessica Hall' },
  { id: '13', username: 'KevinMiller', image: require('../../img/Profil.png'), country: 'South Africa', phone: '123-456-789', interests: ['Gry', 'Gotowanie'], fullName: 'Kevin Miller' },
  { id: '14', username: 'LauraWhite', image: require('../../img/Profil.png'), country: 'Mexico', phone: '987-654-321', interests: ['Film', 'Książki'], fullName: 'Laura White' },
  { id: '15', username: 'MorganLee', image: require('../../img/Profil.png'), country: 'Argentina', phone: '555-123-456', interests: ['Muzyka', 'Moda'], fullName: 'Morgan Lee' },
  { id: '16', username: 'NathanMoore', image: require('../../img/Profil.png'), country: 'Canada', phone: '123-789-456', interests: ['Podróże', 'Gry'], fullName: 'Nathan Moore' },
  { id: '17', username: 'OliviaMartin', image: require('../../img/Profil.png'), country: 'Australia', phone: '987-321-654', interests: ['Sport', 'Film'], fullName: 'Olivia Martin' },
  { id: '18', username: 'PaulJones', image: require('../../img/Profil.png'), country: 'Germany', phone: '555-456-789', interests: ['Muzyka', 'Moda'], fullName: 'Paul Jones' },
  { id: '19', username: 'QuinnDavis', image: require('../../img/Profil.png'), country: 'USA', phone: '123-456-789', interests: ['Film', 'Gry'], fullName: 'Quinn Davis' },
  { id: '20', username: 'RachelSmith', image: require('../../img/Profil.png'), country: 'UK', phone: '987-654-321', interests: ['Książki', 'Sztuka'], fullName: 'Rachel Smith' },
];

export function Friends() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [friendsData, setFriendsData] = useState(initialFriendsData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddFriend = () => {
    // Dodaś obsługę dodawania znajomego
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
