import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePickerComponent from '../../components/DatePicker'
import TimeSlotComponent from '../../components/TimeSlot'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'


const DateTime = ({ navigation }) => {

    const handleSelectTimeSlot = (slot) => {
        console.log('Selected time slot:', slot);
    };
    return (
        <View style={styles.mainContainer}>
            <Header
                navigation={navigation}
                headerText={'Date & Time'}
            />

            <View style={{ paddingHorizontal: 15, marginTop: 10 }}>

                <Text style={{ fontSize: 17, fontWeight: "700", color: "#000" }}>Select Time</Text>
                <DatePickerComponent />
                <TimeSlotComponent onSelectTimeSlot={handleSelectTimeSlot} />


                <View style={{ marginTop: 40 }}>
                    <CustomButton
                        title={'Continue'}
                        onPress={() => navigation.navigate('CheckoutScreen')}
                    />
                </View>
            </View>
        </View>

    )
}

export default DateTime

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9fa",
    },
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: Platform.OS == 'android' ? 20 : 40,
        paddingBottom: 15,
        backgroundColor: "#fff"
    },
})