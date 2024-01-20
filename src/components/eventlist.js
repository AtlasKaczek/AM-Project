import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EventList = ({ selectedDay, selectedMonth, selectedYear, onAddEventPress }) => {
    const [DayEvents, setDayEvents] = useState([]);
    
    const list = [
        {
            date: `20/12/2023`,
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
            date: `22/12/2023`,
            events: [
                {
                    name: 'Obiad',
                    desc: 'Opis',
                    time_start: '15:00',
                    time_end: '15:30',
                },
            ],
        },
    ];

    useEffect(() => {
        const getDayEvents = () => {
            const currentDate = new Date().toLocaleDateString('en-GB');
            const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            
            if (selectedDay === null && selectedMonth === null) {
                const DayEvents = list.find((item) => item.date === currentDate);
                if (DayEvents) {
                  return DayEvents.events.sort(
                    (eventA, eventB) =>
                      new Date(2023, 1, 1, eventA.time_start.slice(0, 2), eventA.time_start.slice(-2)) -
                      new Date(2023, 1, 1, eventB.time_start.slice(0, 2), eventB.time_start.slice(-2))
                  );
                }
              } else {
                const selectedDateEvents = list.find(
                  (item) =>
                    item.date ===
                    `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
                );
                if (selectedDateEvents) {
                  return selectedDateEvents.events.sort(
                    (eventA, eventB) =>
                      new Date(2023, 1, 1, eventA.time_start.slice(0, 2), eventA.time_start.slice(-2)) -
                      new Date(2023, 1, 1, eventB.time_start.slice(0, 2), eventB.time_start.slice(-2))
                  );
                }
              }

            return [];
        };

        const updatedEvents = getDayEvents();
        setDayEvents(updatedEvents);
    }, [selectedDay, selectedMonth, selectedYear]);

    return (
        <View style={styles.container}>
            <View style={styles.addEventContainer}>
                <TouchableOpacity style={styles.addEvent} onPress={() => onAddEventPress()}>
                    <Text style={styles.addEventText}>Dodaj wydarzenie</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.eventsContainer}>
                {DayEvents.length > 0 ? (
                    DayEvents.map((event, index) => (
                        <View key={index} style={styles.eventItem}>
                            <Text style={styles.eventName}>{event.name}</Text>
                            <Text style={styles.eventDesc}>{event.desc}</Text>
                            <View style={styles.timeContainer}>
                                <Text style={styles.eventTime}>{event.time_start}</Text>
                                <Text style={styles.timeSeparator}> - </Text>
                                <Text style={styles.eventTime}>{event.time_end}</Text>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noEventsText}>No events for the selected day</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    eventsContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
    },
    eventItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDesc: {
        fontSize: 16,
        color: '#555',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8,
    },
    eventTime: {
        fontSize: 14,
        color: '#888',
    },
    timeSeparator: {
        fontSize: 14,
        color: '#888',
        marginHorizontal: 4,
    },
    noEventsText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
    },
    addEventContainer: {
        alignItems: 'center',
    },
    addEvent: {
        width: '100%',
        backgroundColor: '#66b2ff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    addEventText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EventList;