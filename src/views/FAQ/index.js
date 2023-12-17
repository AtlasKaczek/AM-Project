import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";

export function FAQ() {
  const navigation = useNavigation();

  // Dane dla akordeonów (pytanie i odpowiedź)
  const faqData = [
    { id: '1', question: 'Jak zmienić hasło?', answer: 'Aby zmienić hasło, należy przejść do ustawień, następnie w sekcję "Prywatność i Bezpieczeństwo" i tam mamy możliwość zmiany hasła oraz adresu email po poprawnym wpisaniu naszego obecnego hasła.' },
    { id: '2', question: 'Jak zmienić zdjęcie profilowe?', answer: 'Aby zmienić zdjęcie profilowe, przejdź do ustawień, następnie do sekcji "Profil" i tam znajdziesz opcję zmiany zdjęcia.' },
    { id: '3', question: 'Jak dodawać nowych znajomych?', answer: 'Możesz dodać nowych znajomych w sekcji "Znajomi", a następnie w prawym górnym rogu ekranu znajdziesz przycisk w postaci "+". Po jego kliknięciu zostaniesz przekierowany do listy osób, które możesz dodać do znajomych.' },
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
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
        <Text style={styles.headerText}>FAQ</Text>
      </View>

      {/* Lista pytań i odpowiedzi w formie akordeonów */}
      <ScrollView style={styles.faqContainer}>
        {faqData.map((item) => (
          <View key={item.id} style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.faqHeader}>
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <Image
                source={require('../../img/arrow.png')}
                style={[styles.arrowIcon2, { transform: [{ rotate: expandedItem === item.id ? '180deg' : '0deg' }] }]}
              />
            </TouchableOpacity>
            {expandedItem === item.id && (
              <View style={styles.faqAnswerContainer}>
                <Text style={styles.faqAnswer}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
