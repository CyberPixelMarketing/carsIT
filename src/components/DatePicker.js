import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    console.log(selectedDate)

    const generateDateList = () => {
        const dates = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const getDateLabel = (date) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const dateString = date.getDate();

        if (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        ) {
            return `Today${'\n'} ${dateString}`;
        } else if (
            date.getDate() === tomorrow.getDate() &&
            date.getMonth() === tomorrow.getMonth() &&
            date.getFullYear() === tomorrow.getFullYear()
        ) {
            return `Tomorrow${'\n'} ${dateString}`;
        } else {
            const options = { weekday: 'short' };
            const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
            const dateString = date.getDate();
            return `${dayName} ${'\n'} ${dateString}`;
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedDate(item)} style={[styles.dateItem, selectedDate && {
                backgroundColor: item.getDate() === selectedDate.getDate() ? '#000' : '#fff',
        }]}>
            <Text style={[styles.dateText,{color:selectedDate && item.getDate() === selectedDate.getDate() ? "#fff":"#000"}]}>{getDateLabel(item)}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={generateDateList()}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toISOString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
    },
    dateItem: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 8,
        borderRadius: 4,
    },
    dateText: {
        fontSize: 18,
        textAlign:"center"
    },
    selectedDate: {
        fontSize: 18,
        marginVertical: 16,
    },
    openPickerButton: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default DatePickerComponent;
