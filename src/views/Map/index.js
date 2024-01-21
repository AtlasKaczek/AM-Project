import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from './style';


export function MapScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null); 


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                navigation.goBack();
            } else {
                setHasPermission(status === 'granted');
                const location = await Location.getCurrentPositionAsync();
                setUserLocation(location);
                console.log(location);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                showsUserLocation={true}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                }}>

            </MapView>
        </View>
    );
};