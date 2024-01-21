import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from './style';

export function MapScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [mapRegion, setRegion] = useState(null)
    const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
        longitude: 19.134,
        latitude: 51.918
    });

    const selectLocalization = () => {
        navigation.navigate({
            name: 'AddEvent',
            params: { selectedCoordinates: draggableMarkerCoord },
            merge: true,
          });
    }

    const porwot = () => {
        navigation.goBack();
    }


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                navigation.goBack();
            } else {
                setHasPermission(status === 'granted');
                let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
                setUserLocation(JSON.stringify({ latitude, longitude }));
                setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
                setDraggableMarkerCoord({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                showsUserLocation={true}
                initialRegion={{
                    "latitude": 51.918,
                    "latitudeDelta": 10.0922,
                    "longitude": 19.134,
                    "longitudeDelta": 10.0421,
                }}
                onRegionChange={region => setRegion(region)}
            >
                <Marker
                    draggable
                    pinColor='#0000ff'
                    coordinate={draggableMarkerCoord}
                    onDragEnd={(e) => {
                        console.log("Marker dragged:", e.nativeEvent.coordinate);
                        setDraggableMarkerCoord(e.nativeEvent.coordinate);
                    }}
                />
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.addBtn, styles.porwotBtn]} onPress={porwot}>
                    <Text style={styles.btnText}>Porwót</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.addBtn, styles.zatwierdzBtn]} onPress={selectLocalization}>
                    <Text style={styles.btnText}>Zatwierdź</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};