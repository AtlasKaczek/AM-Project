import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { styles } from "./style";

export function Privacy({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Górny pasek niebieski */}
      <View style={styles.blueBar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Image
            source={require('../../img/strzalka.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Polityka Prywatności</Text>
      </View>

      {/* Treść polityki prywatności */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.privacyText}>
        Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie 
        zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) 
        oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego 
        przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
        </Text>
      </ScrollView>
    </View>
  );
}
