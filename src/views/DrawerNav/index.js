import { createDrawerNavigator } from '@react-navigation/drawer';
import { Month } from "../Month";
import { Week } from '../Week';

const Drawer = createDrawerNavigator();

export function DrawerNav() {
    return (
        <Drawer.Navigator inittialRouteName="Miesiac">
            <Drawer.Screen name="Miesiąc" component={Month} />
            <Drawer.Screen name="Tydzień" component={Week} />
        </Drawer.Navigator>
    );
}