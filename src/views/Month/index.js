import {View} from "react-native";
import Calendar from "../../components/calendar";

export function Month({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Calendar/>
      </View>
  );
}