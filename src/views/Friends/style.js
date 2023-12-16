import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blueBar: {
    backgroundColor: '#1554F6',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  addButton: {
    marginLeft: 10,
  },
  addIcon: {
    tintColor: 'white',
    width: 30,
    height: 30,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendUsername: {
    fontSize: 16,
  },
});
