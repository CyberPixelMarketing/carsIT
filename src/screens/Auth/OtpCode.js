import { Dimensions, Image, ImageBackground, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import OTPTextInput from 'react-native-otp-textinput'
import { colors } from '../../constant/color'
const { height } = Dimensions.get('screen')


const OtpCode = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.mainContainer}>

                <View style={{ alignItems: "center", marginTop: height / 9, marginBottom: 50 }}>
                    <Image style={{ width: '50%', height: 150 }} source={require('../../asset/images/carIt.png')} />

                </View>
                <Text style={styles.mobileTxt}>Enter OTP</Text>
                <OTPTextInput textInputStyle={styles.otpBox} tintColor={colors.btnBgColor} ref={e => (otpInput = e)} />
                <CustomButton
                    title={'Submit'}
                    onPress={() => navigation.navigate('UserNavigation', {
                        screen: "HomeScreen"
                    })}
                />
            </View>
        </TouchableWithoutFeedback>


    )
}

export default OtpCode

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#303030"

    },
    mobileTxt: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 10
    },
    otpBox: {
        backgroundColor: "#fff",
        borderRadius: 5,
        width: 63,
        height: 57,
        marginBottom: 20
    }
})