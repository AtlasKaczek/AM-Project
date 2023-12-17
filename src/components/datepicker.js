import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DatePicker = ({ selectedDay, selectedMonth, selectedYear, onSelectedDayChange, onSelectedMonthChange, onSelectedYearChange }) => {
    const [currentMonth, setCurrentMonth] = useState(isNaN(selectedMonth) ? selectedMonth : new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(isNaN(selectedYear) ? selectedYear : new Date().getFullYear());

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const getCurrentMonthList = () => {
        const monthList = [];
        for (let day = 1; day <= getDaysInMonth(currentMonth, currentYear); day++) {
            const dateString = `${day >= 10 ? day : `0${day}`}/${currentMonth}/${currentYear}`;
            monthList.push({
                date: dateString,
            });
        }

        return monthList;
    };

    const getDayName = (dateString) => {
        const daysOfWeek = ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];

        const dateObj = new Date(
            parseInt(dateString.slice(-4)),
            parseInt(dateString.slice(3, 5)) - 1,
            parseInt(dateString.slice(0, 2))
        );
        const dayIndex = dateObj.getDay();
        return daysOfWeek[dayIndex];
    };

    const monthList = getCurrentMonthList();

    const changeSelectedDate = (day, month, year) => {
        onSelectedDayChange(day);
        onSelectedMonthChange(month);
        onSelectedYearChange(year);
    }

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
        setCurrentYear((prevYear) => (currentMonth === 1 ? prevYear - 1 : prevYear));
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
        setCurrentYear((prevYear) => (currentMonth === 12 ? prevYear + 1 : prevYear));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePrevMonth} style={styles.arrowButton}>
                <Image
                    source={require('../img/strzalka.png')}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <FlatList
                horizontal
                contentContainerStyle={styles.flatListContainer}
                data={monthList}
                keyExtractor={(item) => item.date}
                renderItem={({ item, index }) => (
                    <View style={styles.dateContainer}>
                        <View style={item.date !== `${selectedDay >= 10 ? selectedDay : `0${selectedDay}`}/${selectedMonth}/${selectedYear}` ?
                                    styles.eventsContainer :
                                    styles.selectedEventItem}>
                            <TouchableOpacity
                                key={index}
                                style={ styles.eventItem}
                                onPress={() => {
                                    const [day, month, year] = item.date.split('/').map(Number);
                                    changeSelectedDate(day, month, year);
                                }}
                            >
                                <Text style={styles.dateText}>{item.date.slice(0, 2)}</Text>
                                <Text style={styles.dayNameText}>{getDayName(item.date)}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                getItemLayout={(data, index) => ({ length: 120, offset: 120 * index, index })}
            />
            <TouchableOpacity onPress={handleNextMonth} style={styles.arrowButton}>
                <Image
                    source={require('../img/strzalka.png')}
                    style={{ width: 30, height: 30, transform: [{ rotate: '180deg' }] }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    flatListContainer: {
        flexGrow: 1,
    },
    arrowButton: {
        padding: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dayNameText: {
        fontSize: 16,
        color: '#555',
    },
    eventsContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#555',
        marginLeft: 5,
        flex: 1,
    },
    eventItem: {
        padding: 12,
        marginTop: 12,
        minHeight: 100,
    },
    selectedEventItem: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'blue',
        marginLeft: 5,
        flex: 1,
    }
});

export default DatePicker;