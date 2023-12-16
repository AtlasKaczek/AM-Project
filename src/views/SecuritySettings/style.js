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
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#1554F6',
    padding: 15,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 200,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
