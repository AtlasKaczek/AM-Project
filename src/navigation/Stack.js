import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Settings, ProfileSettings, SecuritySettings, DrawerNav, Privacy, Profile, Friends, Splash, AddFriends, FAQ, AddEvent } from "../views";



const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={optionScreen} />
            <Stack.Screen name="Login" component={Login} options={optionScreen} />
            <Stack.Screen name="Register" component={Register} options={optionScreen} />
            <Stack.Screen name="Settings" component={Settings} options={optionScreen} />
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={optionScreen} />
            <Stack.Screen name="SecuritySettings" component={SecuritySettings} options={optionScreen} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={optionScreen} />
            <Stack.Screen name="Privacy" component={Privacy} options={optionScreen} />
            <Stack.Screen name="Profile" component={Profile} options={optionScreen} />
            <Stack.Screen name="Friends" component={Friends} options={optionScreen} />
            <Stack.Screen name="AddEvent" component={AddEvent} options={optionScreen} />
            <Stack.Screen name="AddFriends" component={AddFriends} options={optionScreen} />
            <Stack.Screen name="FAQ" component={FAQ} options={optionScreen} />
        </Stack.Navigator>
    );
}