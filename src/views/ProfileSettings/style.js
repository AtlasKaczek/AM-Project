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
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changeImageText: {
    color: '#1554F6',
    fontSize: 16,
  },
  usernameContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: 'center',
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    alignSelf: 'center',
  },
  picker: {
    height: 50,
    width: "80%",
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#1554F6',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 200,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  interestModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
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
  interestItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
