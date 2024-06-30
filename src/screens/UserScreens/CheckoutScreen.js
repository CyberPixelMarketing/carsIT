import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import { colors } from '../../constant/color'
import CountryPicker from 'react-native-country-picker-modal';



const CheckoutScreen = ({navigation}) => {
    const [selectedPayment, setSelectedPayment] = useState('cash')

    return (
        <View style={styles.mainContainer}>
        <Header 
        navigation={navigation}
        headerText={'Checkout'}
        />



            <Text style={[styles.title]}>Date and Time</Text>

            <View style={styles.shadowBox}>
                <Octicons name={'clock'} size={20}  color={"#000"}/>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: "500", color: "#00000090" }}>Saturday 30, March</Text>
                    <Text style={{ fontWeight: "500", color: "#00000050" }} >11:00 AM - 03:30PM</Text>
                </View>

                <TouchableOpacity style={{ marginLeft: "auto" }}>
                    <Text style={{ textDecorationLine: "underline", fontWeight: "700" }}>Change</Text>
                </TouchableOpacity>
            </View>




            <Text style={[styles.title]}>Location</Text>
            <View style={styles.shadowBox}>
                <MaterialIcons name={'add-location-alt'} size={35} color={"#000"} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: "500", color: "#00000050", fontSize: 15 }}>Add Pickup Address</Text>
                </View>
            </View>


            <Text style={[styles.title]}>Service</Text>
            <View style={[styles.shadowBox]}>
                <Ionicons name={'settings'} size={25} color={"#000"} />
                <View style={{ marginLeft: 20, width: '70%' }}>
                    <Text style={{ fontWeight: "500", color: "#00000050", fontSize: 15 }}>Standard Wash(Service Provider Name) Genesis G80 - Seden </Text>
                </View>
                <View>
                    <Text style={{ marginTop: 20, fontWeight: "600", fontSize: 16 }}>AED 59</Text>
                </View>
            </View>


            <Text style={[styles.title]}>Payment Method</Text>
            <View style={[styles.shadowBox]}>
                <FontAwesome name={'credit-card'} size={25} color={'#000'} />


                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => setSelectedPayment('cash')} style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                        <View style={[styles.paymentIcon, {
                            backgroundColor: selectedPayment == 'cash' ? "gray" : "#fff",
                        }]}>
                            <Ionicons name={'checkmark-sharp'} color={'#fff'}  />
                        </View>

                        <Text style={{ fontWeight: "500", fontSize: 15,color:"#000" }}>Cash Payment</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setSelectedPayment('card')} style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={[styles.paymentIcon, {
                            backgroundColor: selectedPayment == 'card' ? "gray" : "#fff",
                        }]}>
                            <Ionicons name={'checkmark-sharp'} color={'#fff'} />
                        </View>

                        <Text style={{ fontWeight: "500", fontSize: 15,color:"#000"  }}>Card Payment</Text>
                    </TouchableOpacity>

                </View>
            </View>




            <View style={{ flexDirection: "row", justifyContent: "center",marginTop:50 }}>
                <TextInput
                    placeholder='Enter Code'
                    style={styles.inputField}
                    placeholderTextColor={colors.plcHolder}

                />

                <View style={{width:'20%'}}>
                    <CustomButton
                        title={'Apply'}
                        onPress={()=>navigation.navigate('AddLocation')}
                    />
                </View>
            </View>

        </View>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9fa",
    },
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: Platform.OS == 'android'?20: 40,
        paddingBottom: 15,
        backgroundColor: "#fff",
        paddingHorizontal: 15

    },
    headerTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        color:"#000"

    },
    shadowBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: "#fff",
        paddingVertical: 18
    },
    paymentIcon: {
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderWidth: 1,
        marginLeft: 15
    },
    inputField: {
        width: "65%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: "#fff",
        elevation: 3,
        paddingHorizontal:10,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3
        ,color:"#000" 
    }
})
