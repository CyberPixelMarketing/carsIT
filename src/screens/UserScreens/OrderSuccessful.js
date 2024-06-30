import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImagesExport from '../../constant/imagesExport'
import { colors } from '../../constant/color'
import CustomButton from '../../components/CustomButton'
import SvgExport from '../../constant/SvgExport'

const OrderSuccessful = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={{ marginTop: 90, alignItems: "center" }} activeOpacity={0.8} onPress={() => navigation.navigate('MyOrders')}>
                <SvgExport.Successful />
            </TouchableOpacity>
            <Text style={styles.successTxt}>Order Was Places Successfully!</Text>

            <Text style={styles.shortTxt}>We Have Received your order and our team is working to get it to you as quick and sae as possible.</Text>

            <View style={{ width: "70%", alignSelf: "center" }}>
                <CustomButton
                    title={'Go to Home'}
                    onPress={() => navigation.replace('HomeScreen')}
                />
            </View>
        </View>
    )
}

export default OrderSuccessful

const styles = StyleSheet.create({
    successTxt: {
        fontSize: 19,
        fontWeight: "700",
        textAlign: "center",
        color: "#000",
        marginTop: 30
    },
    shortTxt: {
        fontSize: 19,
        textAlign: "center",
        color: colors.plcHolder,
        width: '85%',
        alignSelf: "center",
        marginVertical: 30
    }
})