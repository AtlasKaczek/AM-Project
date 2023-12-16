import {ScrollView, View} from "react-native";
import {styles} from "./style";
import WeekList from "../../components/weeklist";

export function Week({ navigation }) {
  return (
      <View>
          <WeekList/>
      </View>
  );
}