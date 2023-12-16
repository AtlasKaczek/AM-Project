import { ScrollView , View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import Calendar from "../../components/calendar";
import EventList from "../../components/eventlist";
import { styles } from "./style";

export function Month({ navigation }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const onCurrentMonthChange = (calendarData) => {
    setCurrentMonth(calendarData);
  };

  const onCurrentYearChange = (calendarData) => {
    setCurrentYear(calendarData);
  };

  const onSelectedDayChange = (calendarData) => {
    setSelectedDay(calendarData);
  };

  const onSelectedMonthChange = (calendarData) => {
    setSelectedMonth(calendarData);
  };

  const onSelectedYearChange = (calendarData) => {
    setSelectedYear(calendarData);
  };

  return (
    <ScrollView>
      <View style={styles.blueBar}></View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text>Tekst</Text> {/* zamienić na obrazek menu */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Miesiąc</Text>
      </View>
      <Calendar
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        onCurrentMonthChange={onCurrentMonthChange}
        onCurrentYearChange={onCurrentYearChange}
        onSelectedDayChange={onSelectedDayChange}
        onSelectedMonthChange={onSelectedMonthChange}
        onSelectedYearChange={onSelectedYearChange} />
      <EventList
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear} />
    </ScrollView>
  );
}