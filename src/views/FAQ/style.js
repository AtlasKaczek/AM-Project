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
  faqContainer: {
    padding: 10,
  },
  faqItem: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'green',
  },
  faqQuestion: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon2: {
    width: 20,
    height: 20,
    tintColor: 'yellow',
  },
  faqAnswerContainer: {
    padding: 10,
  },
  faqAnswer: {
    fontSize: 16,
  },
});
