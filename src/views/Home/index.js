import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Ustawienia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DrawerNav')}
      >
        <Text style={styles.buttonText}>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
