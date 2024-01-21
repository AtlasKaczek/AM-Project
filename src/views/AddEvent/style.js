import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    title1: {
        width: "80%",
        fontSize: 18,
        fontWeight: "normal",
        marginLeft: 12,
        marginTop: 3,
    },
    title2: {
        width: "80%",
        fontSize: 18,
        fontWeight: "normal",
        marginBottom: 10,
        marginLeft: 12,
    },
    title3: {
        width: "80%",
        fontSize: 18,
        fontWeight: "normal",
        marginVertical: 10,
        marginLeft: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginHorizontal: 12,
        padding: 10,
    },
    AddContainer: {
        flexDirection: 'row'
    },
    plusIMG: {
        height: 24,
        width: 24,
        alignSelf: 'flex-end'
    },
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
    addBtn: {
        alignSelf: 'center',
        width: '90%',
        margin: 20,
        backgroundColor: '#1554F6',
        paddingVertical: 15,
        borderRadius: 100,
        borderColor: 'blue',
        alignItems: 'center',
    },
    addEventText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      categoryItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 2,
        borderRadius: 100,
        marginHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: "#ccc",
        padding: 5,

      },
      categoryCircle: {
        width: 14,
        height: 14,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: 'black',
      },
      categoryText: {
        fontSize: 16,
        color: 'white',
      },
      singleCategoryRow: {
        flexDirection: 'row',
        justifyContent: 'left',
      },
});
