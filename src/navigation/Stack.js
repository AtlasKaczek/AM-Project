import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Home, Settings, ProfileSettings, SecuritySettings, DrawerNav, Privacy } from "../views";


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
            <Stack.Screen name="SecuritySettings" component={SecuritySettings} options={optionScreen} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={optionScreen} />
            <Stack.Screen name="Privacy" component={Privacy} options={optionScreen} />
            <Stack.Screen name="Splash" component={Splash} options={optionScreen} />
            <Stack.Screen name="Login" component={Login} options={optionScreen}/>
            <Stack.Screen name="Register" component={Register} options={optionScreen}/>
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