import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1554F6',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1, // Dodana linia górna
    borderTopColor: '#ccc', // Kolor linii górnej
  }, 
  switch: {
    marginLeft: 185,
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  label: {
    marginLeft: 18, // Dodana odległość od ikony Profil.png
    fontSize: 17,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 15, // Dodana odległość pionowa
    borderTopWidth: 1, // Dodana linia górna
    borderTopColor: '#ccc', // Kolor linii górnej
  },
  chevronIcon: {
    width: 10,
    height: 16,
    marginLeft: 218,
  },
  chevronIcon2: {
    width: 10,
    height: 16,
    marginLeft: 32,
  },
  chevronIcon3: {
    width: 10,
    height: 16,
    marginLeft: 100,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  subtitle: {
    marginLeft: 16,
    paddingBottom: 15,
    paddingTop: 35,
  }
});
