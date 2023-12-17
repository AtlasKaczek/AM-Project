import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Month } from "../Month";
import { Week } from '../Week';

const Drawer = createDrawerNavigator();

export function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Miesiac"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1554F6',
          height: 70,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            },
      }}
    >
      <Drawer.Screen name="Miesiąc" component={Month} />
      <Drawer.Screen name="Tydzień" component={Week} />
    </Drawer.Navigator>
  );
}
