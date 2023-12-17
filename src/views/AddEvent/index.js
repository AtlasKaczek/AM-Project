import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import DatePicker from "../../components/datepicker";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import HourPicker from "../../components/hourpicker";

export function AddEvent({ navigation }) {
    const route = useRoute()
    const [selectedDay, setSelectedDay] = useState(route.params?.selectedDay);
    const [selectedMonth, setSelectedMonth] = useState(route.params?.selectedMonth);
    const [selectedYear, setSelectedYeat] = useState(route.params?.selectedYear);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [category, setCategory] = useState('Inne');
    const [note, setNote] = useState('');

    const onSelectedDayChange = (data) => {
        setSelectedDay(data);
        console.log(data);
    }

    const onSelectedMonthChange = (data) => {
        setSelectedMonth(data);
        console.log(data);
    }

    const onSelectedYearChange = (data) => {
        setSelectedYeat(data);
        console.log(data);
    }

    const onStartTimeChange = (data) => {
        setStartTime(data);
        console.log(data);
    }

    const onEndTimeChange = (data) => {
        setEndTime(data);
        console.log(data);
    }

    const onNoteChange = (data) => {
        setNote(data);
    }
    const onCategoryChange = (data) => {
        setCategory(data);
    }

    const categoryList = [
        {
            name: 'Spotkania',
            color: '#ACDBDF',
        },
        {
            name: 'Zdrowie',
            color: '#B32C50',
        },
        {
            name: 'Praca',
            color: '#D4ABDC',
        },
        {
            name: 'Inne',
            color: '#3AB7AF',
        },
    ];

    const prepareEvent = () => {
        // TODO: Add implementation
    }

    const addFriendToEvent = () => {
        // TODO: Add implementation
    }

    const renderCategoryRows = () => {
        const rows = [];
        for (let i = 0; i < categoryList.length; i += 3) {
            const row = categoryList.slice(i, i + 3);
            const categoriesInRow = row.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.categoryItem, index === 0 && row.length === 1 ? styles.singleCategoryItem : null]}
                    onPress={() => onCategoryChange(item.name)}
                >
                    <View style={[styles.categoryCircle, { backgroundColor: item.color}]} />
                    <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
            ));
            rows.push(
                <View key={i} style={styles.categoryRow}>
                    {categoriesInRow}
                </View>
            );
        }
        return rows;
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.Container}>
            <View style={styles.blueBar}></View>

            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Image
                        source={require('../../img/strzalka.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ustawienia</Text>
            </View>
            <Text style={styles.title1}>Wybierz datę</Text>
            <DatePicker
                selectedDay={selectedDay}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                onSelectedDayChange={onSelectedDayChange}
                onSelectedMonthChange={onSelectedMonthChange}
                onSelectedYearChange={onSelectedYearChange} />
            <Text style={styles.title2}>Wybierz godzinę</Text>
            <HourPicker
                onStartTimeChange={onStartTimeChange}
                onEndTimeChange={onEndTimeChange} />
            <Text style={styles.title3}>Kategoria</Text>

            <View style={styles.categoryContainer}>{renderCategoryRows()}</View>

            <View style={styles.AddContainer}>
                <Text style={styles.title2}>Dodaj znajomych do wydarzenia</Text>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => addFriendToEvent()}>
                    <Image
                        source={require('../../img/znajomi.png')}
                        style={styles.plusIMG}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.AddContainer}>
                <Text style={styles.title2}>Dodaj lokalizację wydarzenia</Text>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => addFriendToEvent()}>
                    <Image
                        source={require('../../img/Plus.png')}
                        style={styles.plusIMG}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title1}>Dodaj notatkę</Text>
            <TextInput
                style={styles.input}
                placeholder=" "
                maxLength={500}
                value={note}
                onChangeText={onNoteChange}
            />
            <TouchableOpacity style={styles.addBtn} onPress={prepareEvent}>
                <Text style={styles.addEventText}>Dodaj</Text>
            </TouchableOpacity>
        </View>
    );
}