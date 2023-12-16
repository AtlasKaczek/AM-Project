import { ScrollView } from "react-native";
import { useState } from "react";
import Calendar from "../../components/calendar";
import EventList from "../../components/eventlist";

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
      <Calendar
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectedDay={selectedDay}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
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