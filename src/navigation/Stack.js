import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Home, Settings, ProfileSettings } from "../views";

const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={optionScreen} />
            <Stack.Screen name="Login" component={Login} options={optionScreen} />
            <Stack.Screen name="Register" component={Register} options={optionScreen} />
            <Stack.Screen name="Settings" component={Settings} options={optionScreen} />
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={optionScreen} />
        </Stack.Navigator>

    );
}