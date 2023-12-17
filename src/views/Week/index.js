import {ScrollView, View} from "react-native";
import {styles} from "./style";
import WeekList from "../../components/weeklist";

export function Week({ navigation }) {

  const onAddEventPress = (day, month, year) => {
    navigation.navigate('AddEvent', {
      selectedDay: day,
      selectedMonth: month,
      selectedYear: year
    });
  }

  return (
      <View>
          <WeekList
          onAddEventPress={onAddEventPress}/>
      </View>
  );
}