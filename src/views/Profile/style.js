import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  icon1: {
    width: 20,
    height: 20,
    marginRight: 15,
    tintColor: '#1554F6',
  },
  label: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
