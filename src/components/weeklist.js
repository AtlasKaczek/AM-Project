import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const list = [
    {
        date: '12/12/2023',
        events: [
            {
                name: 'Obiad',
                desc: 'Opis',
                time_start: '15:00',
                time_end: '15:30',
            },
            {
                name: 'Spotkanie',
                desc: 'Opis spotkania',
                time_start: '09:30',
                time_end: '10:00',
            },
            {
                name: 'Spacer',
                desc: 'Opis spaceru',
                time_start: '18:00',
                time_end: '19:00',
            },
        ],
    },
    {
        date: '15/12/2023',
        events: [
            {
                name: 'Obiad',
                desc: 'Opis',
                time_start: '15:00',
                time_end: '15:30',
            },
        ],
    },
    {
        date: '16/12/2023',
        events: [],
    },
];

const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

const getCurrentMonthList = () => {
    const currentDay = new Date().getDate();
    const currentWeekDay = new Date().getDay();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const startOfWeek = currentDay - (currentWeekDay === 0 ? 7 : 0) + (currentDay === 0 ? -5 : 1);

    const monthList = [];
    for (let day = startOfWeek; day <= startOfWeek+6; day++) {
        const dateString = `${day >= 10 ? day : `0${day}`}/${currentMonth}/${currentYear}`;
        const eventsForDate = list.find((item) => item.date === dateString)?.events || [];
        monthList.push({
            date: dateString,
            events: eventsForDate,
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

const addEvent = (dateString) => {
    // Dodać implementacje
}

const WeekList = () => {
    const monthList = getCurrentMonthList();

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={monthList}
            keyExtractor={(item) => item.date}
            renderItem={({ item, index }) => (
                <View style={styles.dateContainer}>
                    <View style={styles.leftContent}>
                        <Text style={styles.dayNameText}>{getDayName(item.date)}</Text>
                        <Text style={styles.dateText}>{item.date.slice(0, 2)}</Text>
                    </View>
                    <View style={styles.eventsContainer}>
                        {item.events.length > 0 ? (
                            item.events.map((event, eventIndex) => (
                                <View key={eventIndex} style={styles.eventItem}>
                                    <Text style={styles.eventName}>{event.name}</Text>
                                    <Text style={styles.eventDesc}>{event.desc}</Text>
                                    <Text style={styles.eventTime}>
                                        {`${event.time_start} - ${event.time_end}`}
                                    </Text>
                                </View>
                            ))
                        ) : (
                            <View style={styles.eventItem}>
                                <Text style={styles.noEventsText}>No events for today</Text>
                            </View>
                        )}
                        <TouchableOpacity 
                            style={styles.plusButton}
                            onPress={() => addEvent()}>
                            <Image
                                source={require('../img/Plus.png')}
                                style={styles.plusIMG}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            getItemLayout={(data, index) => ({ length: 120, offset: 120 * index, index })}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    leftContent: {
        marginRight: 10,
        minWidth: 30
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
        padding: 10,
        backgroundColor: '#EEEEEE',
        flex: 1,
    },
    eventItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        minHeight: 100,
        backgroundColor: '#ACDBDF',
    },
    plusButton: {
        marginLeft: 10,
    },
    plusIMG: {
        marginLeft: 10,
        width: 30,
        height: 30,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDesc: {
        fontSize: 16,
        color: '#555',
    },
    eventTime: {
        fontSize: 14,
        color: '#888',
    },
    noEventsText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default WeekList;
