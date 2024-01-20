import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    width: "80%",
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 20,
  },
  bigTitle: {
    fontSize: 40,
    fontWeight: "bold",
    width: "80%",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginLeft: 35,
  },
  buttonText: {
    color: "white",
    fontWeight: "normal",
  },
  checkboxContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: "blue",
  },
  checkboxCheckmark: {
    width: 12,
    height: 12,
    backgroundColor: "white",
  },
  checkboxLabel: {
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  },
});
