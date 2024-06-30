import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')
import AntDesign from 'react-native-vector-icons/AntDesign'
import { carWashData } from '../../constant/data'
import { colors } from '../../constant/color'


const SellerProfile = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../asset/images/blackcarLand.jpg')} style={{ width: width, height: height / 3 }}>

                <View style={{ flex: 1, justifyContent: "flex-end", top: 20, left: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 110, height: 100, backgroundColor: "#000", alignItems: "flex-start", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: '#fff' }}>
                            <Image source={require('../../asset/images/modalCar.png')} style={{ width: 80, height: 60 }} />
                        </View>
                        <View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: "600" }}>Seller Business Name</Text>
                                <View style={{ flexDirection: "row", width: "45%", justifyContent: "space-between", marginTop: 3 }}>
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'star'} color={'#FFCA4B'} />
                                    <AntDesign name={'staro'} color={'#FFCA4B'} />
                                </View>

                                <Text style={{ fontSize: 12, color: "#fff", marginVertical: 5 }}>SellerBusiness@gmail.com</Text>
                                <Text style={{ fontSize: 12, color: "#fff" }}>Phone : 0551245121</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>




            <View style={{ flexDirection: "row", marginVertical: 40, alignItems: "center", marginLeft: 20 }}>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>Car Wash</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.filterBtn, { backgroundColor: "#fff" }]}>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>Car Polish</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.box}>
                {carWashData?.map((item, index) => {
                    return (
                        <View key={index} style={styles.carWashContainer}>
                            <View style={{ flexDirection: "row" }}>
                                <AntDesign name={'infocirlceo'} size={22} color={colors.plcHolder} />

                                <Image source={require('../../asset/images/carWashImg.jpg')} style={{ width: 50, height: 50, marginHorizontal: 15 }} />

                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#00000090" }}>{item?.title}</Text>
                                    <Text style={{ marginTop: 5, fontWeight: "600", color: colors.plcHolder }}>{item?.time}</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 17, fontWeight: "600", color: "#000000" }}>{item?.price}</Text>

                        </View>

                    )
                })}
            </View>
        </View>
    )
}

export default SellerProfile

const styles = StyleSheet.create({
    filterBtn: {
        borderWidth: 1,
        backgroundColor: "#000",
        padding: 10,
        marginRight: 15,
        borderRadius: 10
    },
    box: {

    },
    carWashContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: "#fff",
        elevation: 3,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 17
    }
})