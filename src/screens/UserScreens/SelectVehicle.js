import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { addedCarDetails } from '../../constant/data'
import { colors } from '../../constant/color'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'


const SelectVehicle = ({ navigation }) => {

    const [selectedCar, setSelectedCar] = useState([])
    const [carItems, setCarItems] = useState(addedCarDetails)


    const toggleSelectItem = (id) => {
        setSelectedCar((prevSelectedItems) => {
            if (prevSelectedItems.includes(id)) {
                return prevSelectedItems.filter(itemId => itemId !== id);
            } else {
                return [...prevSelectedItems, id];
            }
        });
    };

    const renderItem = ({ item, index }) => {
        const selectedItem = selectedCar?.includes(index)
        return (
            <View style={styles.carDetailContainer}>
                <TouchableOpacity onPress={() => toggleSelectItem(index)} style={[styles.carDetailIconBox, selectedItem && { backgroundColor: "#777777" }]} >
                    <Octicons name={'check'} size={12} color={'#fff'} />
                </TouchableOpacity>

                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.carNameTxt}>{item?.carName}</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                        <Text style={{ color: "#c6c5c5" }}>{item?.carPlate} / </Text>
                        <View style={{ width: 15, height: 15, backgroundColor: item?.colorCode, borderRadius: 50 }} />
                        <Text style={{ color: "#c6c5c5" }}> {item?.colorName}</Text>
                    </View>
                </View>

                <Image source={require('../../asset/images/modalCar.png')} style={{ width: 140, height: 90, marginLeft: "auto" }} />
            </View>
        )
    }


    const deleteSelectedItems = () => {
        setCarItems((prevItems) => prevItems.filter((item, index) => !selectedCar.includes(index)));
        setSelectedCar([]);
    };

    return (
        <View style={styles.mainContainer}>

            <Header
                navigation={navigation}
                headerText={'Select Vehicle'}
            />
            <View>
                <FlatList
                    data={carItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>


            <View style={{ alignItems: "flex-end", marginTop: 20, marginBottom: 60, marginRight: 25 }}>
                <TouchableOpacity style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 16, color: colors.plcHolder }}>+ Add New Vehicle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={deleteSelectedItems}>
                    <Text style={{ fontSize: 16, color: 'red', textAlign: "left", marginRight: 5 }}>- Delete a Vehicle</Text>
                </TouchableOpacity>
            </View>


            <View style={{ marginHorizontal: 15 }}>
                <CustomButton
                    title={'Continue'}
                    onPress={() => navigation.navigate('ServiceProvider')}
                />
            </View>


        </View>
    )
}

export default SelectVehicle

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9fa"
    },

    carDetailContainer: {
        flexDirection: 'row',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        elevation: 5,
        marginTop: 20,
        paddingLeft: 15
    },
    carDetailIconBox: {
        width: 20,
        height: 20,

        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    carNameTxt: {
        color: colors.plcHolder,
        fontWeight: "500",
        fontSize: 16
    }
})