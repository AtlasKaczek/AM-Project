import { createDrawerNavigator } from '@react-navigation/drawer';
import { Month } from "../Month";

const Drawer = createDrawerNavigator();

export function DrawerNav() {
    return (
        <Drawer.Navigator inittialRouteName="Miesiac">
            <Drawer.Screen name="Miesiąc" component={Month} />
        </Drawer.Navigator>
    );
}