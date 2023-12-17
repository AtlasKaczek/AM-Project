import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  blueBar: {
    backgroundColor: '#1554F6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 10,
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  addButton: {
    marginLeft: 'auto',
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },  
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  friendUsernameDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  removeButton: {
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
  },
  addButtonText: {
    color: 'white',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
