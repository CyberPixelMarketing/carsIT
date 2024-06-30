import { Dimensions, Image, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import CustomButton from '../../components/CustomButton';
const { height } = Dimensions.get('screen')

const SignUp = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [flag, setFlag] = useState('AE');
    const [countryCode, setCountryCode] = useState('971');
    const onSelect = (country) => {
        console.log(country)
        setFlag(country?.cca2)
        setCountryCode(country?.callingCode[0])
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.mainContainer}>

                <View style={styles.imgBox}>
                    <Image style={{ width: '50%', height: 150 }} source={require('../../asset/images/carIt.png')} />

                </View>

                <Text style={styles.mobileTxt}>Mobile Number</Text>
                <View style={styles.flagInputContainer}>
                    < CountryPicker
                        countryCode={flag}
                        withFilter
                        withFlag
                        withAlphaFilter
                        withCallingCode
                        withEmoji
                        onSelect={onSelect}
                    />
                    <Entypo name='triangle-down' size={18} style={{ paddingRight: 8 }} color={'#000'} />
                    <View style={styles.inputBox}  >
                        <Text style={{ color: "#000" }}>+{countryCode}</Text>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            placeholder='Enter Phone Number'
                            style={{ paddingLeft: 10, color: "#000" }}
                            placeholderTextColor={"#797a7a"}

                        />
                    </View>
                </View>

                <CustomButton
                    title={'Sign up'}
                    onPress={() => navigation.navigate('OtpCode')}
                />


            </View>

        </TouchableWithoutFeedback>

    )
}

export default SignUp

const styles = StyleSheet.create({
    mainContainer: {
        // justifyContent: "center",
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#303030"
    },
    mobileTxt: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 20
    },
    imgBox: { alignItems: "center", marginTop: height / 9, marginBottom: 50 },
    flagInputContainer: {
        borderWidth: 1,
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        paddingHorizontal: 12,
        backgroundColor: "#FFF",
        borderRadius: 7,
        marginTop: 15,
        marginBottom: 20
    },
    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        borderLeftWidth: 1,
        paddingHorizontal: 10,
        width: "72%",
        borderColor: "#00000040"
    }
})
