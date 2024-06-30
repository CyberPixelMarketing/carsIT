import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FilterButton from '../../components/FilterButton'
import { colors } from '../../constant/color'


const MyOrders = ({ navigation }) => {
    const [selected, setSelected] = useState('upcoming')

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <TouchableOpacity>
                    <Ionicons name={'arrow-back-outline'} size={20} color={"#000"} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Orders</Text>
            </View>



            <FilterButton
                selected={selected}
                setSelected={setSelected}

            />


            {
                selected == 'past' ?
                    <View style={styles.orderDetailsBox}>

                        <View style={styles.BookingIdBox}>
                            <View>
                                <Text style={styles.titleTxt}>Standard Wash</Text>
                                <Text style={styles.bookingTxt}>Booking ID: 123321123</Text>
                            </View>

                            <TouchableOpacity style={styles.confirmBtn}>
                                <Text style={styles.confirmTxt}>COMPLETED</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginVertical: 10 }} />


                        <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: "#000" }}>Service Provider</Text>
                            <View style={{ flexDirection: "row", width: "20%", justifyContent: "space-between", marginTop: 3 }}>
                                <AntDesign name={'star'} color={'#FFCA4B'} />
                                <AntDesign name={'star'} color={'#FFCA4B'} />
                                <AntDesign name={'star'} color={'#FFCA4B'} />
                                <AntDesign name={'star'} color={'#FFCA4B'} />
                                <AntDesign name={'staro'} color={'#FFCA4B'} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                <View>
                                    <Text style={styles.detail} >Date</Text>
                                    <Text style={{ color: '#000' }}>21st Sept 2021, Monday</Text>
                                </View>

                                <View>
                                    <Text style={styles.detail}>Pick-up Time</Text>
                                    <Text style={{ color: '#000' }}>9:00-9:30am</Text>
                                </View>
                            </View>
                        </View>




                        <View style={styles.callContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('SellerProfile')} style={[styles.innerCallContainer, { width: "100%" }]}>
                                <Text style={{ fontWeight: "600", fontSize: 17, color: colors.plcHolder }}>Book Again</Text>
                            </TouchableOpacity>



                        </View>
                    </View>

                    :

                    <View>
                        <View style={styles.orderDetailsBox}>

                            <View style={styles.BookingIdBox}>
                                <View>
                                    <Text style={styles.titleTxt}>Standard Wash</Text>
                                    <Text style={styles.bookingTxt}>Booking ID: 123321123</Text>
                                </View>

                                <TouchableOpacity style={styles.confirmBtn}>
                                    <Text style={styles.confirmTxt}>CONFIRMED</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginVertical: 10 }} />


                            <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: "#000" }}>Service Provider</Text>
                                <View style={{ flexDirection: "row", width: "20%", justifyContent: "space-between", marginTop: 3 }}>
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'staro'} color={'#FFCA4B'} />
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                    <View>
                                        <Text style={styles.detail} >Date</Text>
                                        <Text style={{ color: "#000" }}>21st Sept 2021, Monday</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.detail}>Pick-up Time</Text>
                                        <Text style={{ color: "#000" }}>9:00-9:30am</Text>
                                    </View>
                                </View>
                            </View>




                            <View style={styles.callContainer}>
                                <TouchableOpacity onPress={() => alert('Call')} style={[styles.innerCallContainer, { borderRightWidth: 1, borderColor: "#D3D3D3" }]}>
                                    <Text style={{ fontWeight: "600", fontSize: 17, color: "#000" }}>Call</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => alert('Cancel')} style={[styles.innerCallContainer]}>
                                    <Text style={{ fontWeight: "600", fontSize: 17, color: "red" }}>Cancel</Text>
                                </TouchableOpacity>

                            </View>
                        </View>







                        <View style={styles.orderDetailsBox}>

                            <View style={styles.BookingIdBox}>
                                <View>
                                    <Text style={styles.titleTxt}>Standard Wash</Text>
                                    <Text style={styles.bookingTxt}>Booking ID: 123321123</Text>
                                </View>

                                <TouchableOpacity style={styles.confirmBtn}>
                                    <Text style={styles.confirmTxt}>Ongoing</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ borderBottomWidth: 1, borderColor: '#D3D3D3', marginVertical: 10 }} />


                            <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: "#000" }}>Service Provider</Text>
                                <View style={{ flexDirection: "row", width: "20%", justifyContent: "space-between", marginTop: 3 }}>
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'staro'} color={'#FFCA4B'} />
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                                    <View>
                                        <Text style={styles.detail} >Date</Text>
                                        <Text style={{ color: "#000" }}>21st Sept 2021, Monday</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.detail}>Pick-up Time</Text>
                                        <Text style={{ color: "#000" }}>9:00-9:30am</Text>
                                    </View>
                                </View>
                            </View>




                            <View style={styles.callContainer}>
                                <TouchableOpacity onPress={{}} style={[styles.innerCallContainer, { borderRightWidth: 1, borderColor: "#D3D3D3" }]}>
                                    <Text style={{ fontWeight: "600", fontSize: 17, color: "#000" }}>Call</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={{}} style={[styles.innerCallContainer]}>
                                    <Text style={{ fontWeight: "600", fontSize: 17, color: "red" }}>Cancel</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

            }





        </View>
    )
}

export default MyOrders

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
        backgroundColor: "#fff",
        paddingHorizontal: 15

    },
    headerTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#000"
    },
    orderDetailsBox: {
        paddingTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: "#fff",
        elevation: 3,
        marginBottom: 30
    },
    titleTxt: { fontSize: 17, fontWeight: "600", color: "#000" },
    BookingIdBox: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingHorizontal: 15,

    },

    confirmBtn: {
        backgroundColor: '#50C87870',
        padding: 3,
        borderWidth: 1,
        borderColor: '#50C878',
        borderRadius: 5,
    },
    confirmTxt: {
        color: '#008000',
        fontSize: 12
    },
    bookingTxt: {
        fontSize: 16,
        color: colors.plcHolder

    },

    detail: {
        fontSize: 15,
        fontWeight: "500",
        color: "#00000090"
    },
    callContainer: {
        flexDirection: "row",
        borderTopWidth: 1,
        // borderRadius: 1,
        justifyContent: "space-between",
        borderColor: "#D3D3D3",
    },
    innerCallContainer: {
        width: "50%",
        alignItems: "center",
        paddingVertical: 12
    }
})