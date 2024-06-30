import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { serviceProvider } from '../../constant/data'
import { colors } from '../../constant/color'

const ServiceProvider = ({ navigation }) => {

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.dataContainer}>
                <View style={styles.dataBox}>
                    <View style={styles.imgBox}>
                        <Image source={item?.image} style={{ height: 40, width: 40 }} borderRadius={5} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, color: "#727373" }}>{item?.name}</Text>
                        <View style={{ flexDirection: "row", width: "45%", justifyContent: "space-between", marginTop: 3 }}>
                            <AntDesign name={'star'} color={'#FFCA4B'} />
                            <AntDesign name={'star'} color={'#FFCA4B'} />
                            <AntDesign name={'star'} color={'#FFCA4B'} />
                            <AntDesign name={'star'} color={'#FFCA4B'} />
                            <AntDesign name={'staro'} color={'#FFCA4B'} />
                        </View>
                    </View>
                    <Text style={{ marginLeft: "auto", fontSize: 10 }}>AED<Text style={{ fontSize: 17, fontWeight: "500" }}> {item?.price}</Text></Text>
                </View>
                <Text style={{ marginVertical: 20, fontSize: 13, fontWeight: "300", color: "#00000099" }}>{item?.text}</Text>

                <View style={{ borderBottomWidth: 1, borderBlockColor: '#00000020', marginHorizontal: -15 }} />

                <TouchableOpacity style={styles.bookTxt} onPress={() => navigation.navigate('DateTime')}>
                    <Text style={{ fontSize: 17, fontWeight: "500", color: colors.plcHolder }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name={'arrow-back-outline'} size={20} color={'#000'} />
                </TouchableOpacity>
                <Image source={require('../../asset/images/car.jpg')} style={{ width: 200, height: 50, marginLeft: "auto", marginRight: "auto" }} />
            </View>
            <Text style={styles.headerTitle}>Choose Service Provider</Text>



            <FlatList
                data={serviceProvider}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={renderItem}
            />

        </View>
    )
}

export default ServiceProvider

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9fa"
    },
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Platform.OS == 'android' ? 20 : 40,

        paddingBottom: 15, paddingHorizontal: 15,
        backgroundColor: "#fff"
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 35,
        color: "#000"
    },
    dataContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: "#fff",
        elevation: 3,
        marginTop: 10,
        paddingHorizontal: 15,
        paddingTop: 10


    },
    dataBox: {
        flexDirection: "row",
        alignItems: "center",

    },
    imgBox: {
        width: 55,
        height: 55,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: "#fff",
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: 20

    },
    bookTxt: {
        alignItems: "center",
        paddingVertical: 15,

    }
})