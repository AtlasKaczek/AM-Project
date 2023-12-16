import React from "react";
import { View, Text, TouchableOpacity, Image, Switch } from "react-native";
import { styles } from "./style";

// Komponent dla elementu listy z ikoną, tekstem i strzałką
const ListItem = ({ icon, label, onPress, rightElement }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
      {rightElement}
    </TouchableOpacity>
  );
};

// Komponent dla elementu listy z suwakiem
const SwitchListItem = ({ label, onValueChange, value }) => {
  return (
    <View style={styles.switchListItem}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#1554F7" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

// Komponent Settings z dodanymi elementami listy
export function Settings({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}></View>

      <View style={styles.header}>
        {/* Strzałka do cofania */}
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={[styles.arrowIcon, { width: 30, height: 30 }]}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ustawienia</Text>
      </View>

      {/* Subtitle "Profil" */}
      <Text style={styles.subtitle}>Profil</Text>
      {/* Element Profil */}
      <ListItem
        icon={require('../../img/Profil.png')}
        label="Profil"
        onPress={() => navigation.navigate('ProfileSettings')}
        rightElement={<Image source={require('../../img/StrzalkaPrawo.png')} style={styles.chevronIcon} />}
      />
      {/* Element Prywatność */}
      <ListItem
        icon={require('../../img/Prywatnosc.png')}
        label="Prywatność i Bezpieczeństwo"
        onPress={() => navigation.navigate('SecuritySettings')}
        rightElement={<Image source={require('../../img/StrzalkaPrawo.png')} style={styles.chevronIcon2} />}
      />

      {/* Subtitle "General" */}
      <Text style={styles.subtitle}>General</Text>
      {/* Element powiadomienia */}
      <SwitchListItem label="Powiadomienia" onValueChange={() => {/* Dodaj obsługę zmiany wartości */}} value={true} />

      {/* Subtitle "About" */}
      <Text style={styles.subtitle}>About</Text>
      {/* Element Polityka Prywatności */}
      <ListItem
        icon={require('../../img/About.png')}
        label="Polityka Prywatności"
        onPress={() => navigation.navigate('Privacy')}
        rightElement={<Image source={require('../../img/StrzalkaPrawo.png')} style={styles.chevronIcon3} />}
      />
    </View>
  );
}
