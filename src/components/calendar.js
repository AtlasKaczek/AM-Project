import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calendar = ({currentMonth, currentYear, selectedDay, selectedMonth, selectedYear, onCurrentMonthChange, onCurrentYearChange, onSelectedDayChange, onSelectedMonthChange, onSelectedYearChange}) => {
    const currentDay = new Date().getDate();

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const startDay = (month, year) => {
        return new Date(year, month - 1, 1).getDay();
    };

    const generateCalendar = () => {
        const totalDays = daysInMonth(currentMonth, currentYear);
        const firstDay = startDay(currentMonth, currentYear);
        const calendar = [];

        for (let i = (firstDay + 6) % 7; i > 0; i--) {
            calendar.push(null);
        }

        for (let day = 1; day <= totalDays; day++) {
            calendar.push(day);
        }

        return calendar;
    };

    const prevMonth = () => {
        onCurrentMonthChange((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
        onCurrentYearChange((prevYear) => (currentMonth === 1 ? prevYear - 1 : prevYear));
    };

    const nextMonth = () => {
        onCurrentMonthChange((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
        onCurrentYearChange((prevYear) => (currentMonth === 12 ? prevYear + 1 : prevYear));
    };

    const handleDayPress = (day) => {
        if (day !== null) {
            onSelectedDayChange(day);
            onSelectedMonthChange(currentMonth);
            onSelectedYearChange(currentYear);
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={prevMonth} style={styles.prevNextButton}>
                    <Text style={styles.prevNextButtonText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {new Date(currentYear, currentMonth - 1).toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </Text>
                <TouchableOpacity onPress={nextMonth} style={styles.prevNextButton}>
                    <Text style={styles.prevNextButtonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calendarContainer}>
                <View style={styles.weekdaysContainer}>
                    <Text style={styles.weekdayText}>Pon</Text>
                    <Text style={styles.weekdayText}>Wt</Text>
                    <Text style={styles.weekdayText}>Śr</Text>
                    <Text style={styles.weekdayText}>Czw</Text>
                    <Text style={styles.weekdayText}>Pt</Text>
                    <Text style={styles.weekdayText}>Sob</Text>
                    <Text style={styles.weekdayText}>Ndz</Text>
                </View>
                <View style={styles.daysContainer}>
                    {generateCalendar().map((day, index) => (
                        <TouchableOpacity
                            key={index}
                            style={
                                day !== null
                                    ? day === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear
                                        ? styles.selectedDayItem
                                        : currentDay === day && currentMonth === new Date().getMonth()+1 && currentYear === new Date().getFullYear()
                                            ? styles.currentDayItem
                                            : styles.dayItem
                                    : styles.emptyDayItem
                            }
                            onPress={() => handleDayPress(day)}
                        >
                            <Text style={styles.dayText}>{day !== null ? day : ''}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    prevNextButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#66bfbf',
    },
    prevNextButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    calendarContainer: {
        width: '100%',
    },
    weekdaysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    weekdayText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayItem: {
        flexBasis: '14.28%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fcfefe',
        borderColor: '#ccc',
    },
    currentDayItem: {
        flexBasis: '14.28%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#66bfbf',
        borderColor: '#66bfbe',
    },
    emptyDayItem: {
        flexBasis: '14.28%',
        backgroundColor: '#eaf6f6',
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#555',
    },
    selectedDayItem: {
        flexBasis: '14.28%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f76b8a',
        borderColor: '#f76b89',
    },
    dayText: {
        fontSize: 16,
    },
});

export default Calendar;