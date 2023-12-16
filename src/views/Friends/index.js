import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";

const initialFriendsData = [
    { id: '1', username: 'JohnDoe', image: require('../../img/Profil.png') },
    { id: '2', username: 'JaneSmith', image: require('../../img/Profil.png') },
    { id: '3', username: 'AliceJohnson', image: require('../../img/Profil.png') },
    { id: '4', username: 'BobWilliams', image: require('../../img/Profil.png') },
    { id: '5', username: 'CharlieDavis', image: require('../../img/Profil.png') },
    { id: '6', username: 'DianaMoore', image: require('../../img/Profil.png') },
    { id: '7', username: 'EthanTaylor', image: require('../../img/Profil.png') },
    { id: '8', username: 'FionaClark', image: require('../../img/Profil.png') },
    { id: '9', username: 'GeorgeSmith', image: require('../../img/Profil.png') },
    { id: '10', username: 'HannahBrown', image: require('../../img/Profil.png') },
    { id: '11', username: 'IsaacWilson', image: require('../../img/Profil.png') },
    { id: '12', username: 'JessicaHall', image: require('../../img/Profil.png') },
    { id: '13', username: 'KevinMiller', image: require('../../img/Profil.png') },
    { id: '14', username: 'LauraWhite', image: require('../../img/Profil.png') },
    { id: '15', username: 'MorganLee', image: require('../../img/Profil.png') },
    { id: '16', username: 'NathanMoore', image: require('../../img/Profil.png') },
    { id: '17', username: 'OliviaMartin', image: require('../../img/Profil.png') },
    { id: '18', username: 'PaulJones', image: require('../../img/Profil.png') },
  ];
  
export function Friends() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [friendsData, setFriendsData] = useState(initialFriendsData);

  const handleAddFriend = () => {
    // Obsługa dodawania znajomego
    // Przykład: console.log("Dodaj znajomego");
  };

  const handleSearch = (text) => {
    setSearchTerm(text);

    // Filtruj znajomych na podstawie wprowadzonego tekstu
    const filteredFriends = initialFriendsData.filter((friend) =>
      friend.username.toLowerCase().includes(text.toLowerCase())
    );

    setFriendsData(filteredFriends);
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
      <TextInput
        style={styles.searchInput}
        placeholder="Szukaj znajomych"
        onChangeText={handleSearch}
        value={searchTerm}
      />

      {/* Lista znajomych */}
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Image
              source={item.image}
              style={styles.friendImage}
            />
            <Text style={styles.friendUsername}>{item.username}</Text>
          </View>
        )}
      />
    </View>
  );
}
