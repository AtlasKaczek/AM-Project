import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '90%',
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    addBtn: {
        alignSelf: 'right',
        width: '45%',
        margin: 10,
        backgroundColor: '#1554F6',
        paddingVertical: 15,
        borderRadius: 100,
        borderColor: 'blue',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;