import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Settings, ProfileSettings, SecuritySettings, DrawerNav, Privacy, Profile, Friends, Splash, AddEvent } from "../views";


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
        </Stack.Navigator>
    );

    // Work in progress SPLSH with flow.  
    // return (
    //     <NavigationContainer>
    //       <Stack.Navigator initialRouteName="Splash" headerMode="none">
    //         <Stack.Screen name="Splash" component={Splash} />
    //         <Stack.Screen name="Login" component={Login} />
    //         <Stack.Screen name="Register" component={Register} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
}