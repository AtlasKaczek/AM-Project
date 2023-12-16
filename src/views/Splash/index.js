import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { styles } from "./style";

export function Splash({ navigation }) {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
    </View>
  );
}
