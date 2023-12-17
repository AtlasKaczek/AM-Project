import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HourPicker = ({ onStartTimeChange, onEndTimeChange }) => {
    const [hours1, setHours1] = useState('');
    const [minutes1, setMinutes1] = useState('');

    const [hours2, setHours2] = useState('');
    const [minutes2, setMinutes2] = useState('');

    const handleHourChange1 = (text) => {
        setHours1(text.replace(/[^0-9]/g, '').slice(0, 2));
        onStartTimeChange(`${text}:${minutes1}`);
    };

    const handleMinuteChange1 = (text) => {
        setMinutes1(text.replace(/[^0-9]/g, '').slice(0, 2));
        onStartTimeChange(`${hours1}:${text}`);
    };

    const handleHourChange2 = (text) => {
        setHours2(text.replace(/[^0-9]/g, '').slice(0, 2));
        onEndTimeChange(`${text}:${minutes2}`);
    };

    const handleMinuteChange2 = (text) => {
        setMinutes2(text.replace(/[^0-9]/g, '').slice(0, 2));
        onEndTimeChange(`${hours2}:${text}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftRightContainer}>
                <Text style={styles.label}>{'od'}</Text>
                <View style={styles.pickerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="HH"
                            keyboardType="numeric"
                            maxLength={2}
                            value={hours1}
                            onChangeText={handleHourChange1}
                        />
                    </View>
                    <Text style={styles.separator}>{':'}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="MM"
                            keyboardType="numeric"
                            maxLength={2}
                            value={minutes1}
                            onChangeText={handleMinuteChange1}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.pickerSeparator}>{'>'}</Text>

            <View style={styles.leftRightContainer}>
                <Text style={styles.label}>{'do'}</Text>
                <View style={styles.pickerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="HH"
                            keyboardType="numeric"
                            maxLength={2}
                            value={hours2}
                            onChangeText={handleHourChange2}
                        />
                    </View>
                    <Text style={styles.separator}>{':'}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="MM"
                            keyboardType="numeric"
                            maxLength={2}
                            value={minutes2}
                            onChangeText={handleMinuteChange2}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftRightContainer: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        marginRight: 8,
        marginLeft: 25,
    },
    input: {
        padding: 8,
        width: 40,
        fontSize: 20,
    },
    separator: {
        fontSize: 18,
    },
    pickerSeparator: {
        fontSize: 18,
        marginRight: 20,
        marginTop: 25,
    },
});

export default HourPicker;
