import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  blueBar: {
    backgroundColor: '#1554F6',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  arrowIcon: {
    tintColor: 'white',
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  contentContainer: {
    padding: 20,
  },
  privacyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Dodany kolor tekstu
    textAlign: 'justify', // Wyrównanie tekstu
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Dodaj margines na górze
    marginBottom: 5, // Dodaj margines na dole
  },

  privacyText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10, // Dodaj margines na dole
  },

  linkText: {
    color: '#1554F6',
    textDecorationLine: 'underline',
  },
});
