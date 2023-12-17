// index.js

import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { styles } from "./style";

export function Privacy({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleContactLink = () => {
    // Otwórz link do kontaktu lub formularza kontaktowego
    Linking.openURL('https://www.example.com/contact');
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
          Zgoda na przetwarzanie danych osobowych zawartych w niniejszym dokumencie 
          zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) 
          oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
          w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego 
          przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
        </Text>

        {/* Cel i zakres zbierania danych */}
        <Text style={styles.sectionHeader}>Cel i zakres zbierania danych:</Text>
        <Text style={styles.privacyText}>
          Zbieramy dane osobowe w celu świadczenia usług dostępnych w naszej aplikacji, w tym do obsługi konta 
          użytkownika, personalizacji treści, udostępniania funkcji społecznościowych oraz do celów statystycznych 
          i analitycznych. W razie konieczności korzystamy także z danych w celu rozwiązania problemów technicznych 
          oraz zapewnienia bezpieczeństwa naszej aplikacji.
        </Text>

        {/* Rodzaje zebranych danych */}
        <Text style={styles.sectionHeader}>Rodzaje zebranych danych:</Text>
        <Text style={styles.privacyText}>
          Zebrane przez nas dane mogą obejmować między innymi imię, nazwisko, adres e-mail, numer telefonu, lokalizację, 
          dane dotyczące urządzenia oraz inne informacje przekazane nam dobrowolnie przez użytkowników.
        </Text>

        {/* Sposoby zbierania danych */}
        <Text style={styles.sectionHeader}>Sposoby zbierania danych:</Text>
        <Text style={styles.privacyText}>
          Dane są zbierane poprzez rejestrację konta, korzystanie z funkcji lokalizacji, przesyłanie formularzy, 
          pliki cookie oraz inne technologie śledzenia.
        </Text>

        {/* Cel przetwarzania danych */}
        <Text style={styles.sectionHeader}>Cel przetwarzania danych:</Text>
        <Text style={styles.privacyText}>
          Dane są przetwarzane w celu świadczenia usług, dostosowania treści, analizy statystycznej, obsługi 
          społecznościowej, rozwiązywania problemów technicznych i zapewnienia bezpieczeństwa aplikacji.
        </Text>

        {/* Podmioty trzecie */}
        <Text style={styles.sectionHeader}>Podmioty trzecie:</Text>
        <Text style={styles.privacyText}>
          Dane osobowe mogą być udostępniane partnerom biznesowym, dostawcom usług, narzędziom analitycznym 
          oraz innym podmiotom trzecim w celu umożliwienia świadczenia usług oraz poprawy jakości naszej aplikacji.
        </Text>

        {/* Bezpieczeństwo danych */}
        <Text style={styles.sectionHeader}>Bezpieczeństwo danych:</Text>
        <Text style={styles.privacyText}>
          Stosujemy odpowiednie środki bezpieczeństwa, takie jak szyfrowanie danych, aby chronić je przed 
          nieautoryzowanym dostępem czy utratą.
        </Text>

        {/* Prawa użytkowników */}
        <Text style={styles.sectionHeader}>Prawa użytkowników:</Text>
        <Text style={styles.privacyText}>
          Użytkownicy mają prawo żądania dostępu do swoich danych, ich poprawiania, usuwania oraz 
          wycofywania udzielonej zgody. W celu skorzystania z tych praw, prosimy o kontakt poprzez{' '}
          <Text style={styles.linkText} onPress={handleContactLink}>formularz kontaktowy</Text>.
        </Text>

        {/* Cookies i technologie śledzenia */}
        <Text style={styles.sectionHeader}>Cookies i technologie śledzenia:</Text>
        <Text style={styles.privacyText}>
          Korzystamy z plików cookie i innych technologii śledzenia w celu zbierania informacji o 
          użytkowaniu aplikacji oraz dostosowania treści. Użytkownicy mogą zarządzać użyciem plików 
          cookie poprzez ustawienia przeglądarki.
        </Text>

        {/* Zmiany w polityce prywatności */}
        <Text style={styles.sectionHeader}>Zmiany w polityce prywatności:</Text>
        <Text style={styles.privacyText}>
          Niniejsza polityka prywatności może ulec zmianie. W przypadku istotnych zmian poinformujemy 
          użytkowników poprzez powiadomienie w aplikacji.
        </Text>

        {/* Kontakt */}
        <Text style={styles.sectionHeader}>Kontakt:</Text>
        <Text style={styles.privacyText}>
          W przypadku pytań dotyczących polityki prywatności, prosimy o kontakt poprzez{' '}
          <Text style={styles.linkText} onPress={handleContactLink}>formularz kontaktowy</Text>.
        </Text>
      </ScrollView>
    </View>
  );
}
