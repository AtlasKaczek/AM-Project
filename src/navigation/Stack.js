import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Home } from "../views";
import { Month } from '../views/Month';

const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Month" component={Month} options={optionScreen} />
            <Stack.Screen name="Home" component={Home} options={optionScreen} />
            <Stack.Screen name="Login" component={Login} options={optionScreen} />
            <Stack.Screen name="Register" component={Register} options={optionScreen} />
        </Stack.Navigator>

    );
}