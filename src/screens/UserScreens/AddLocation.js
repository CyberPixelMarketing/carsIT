import { Image, Keyboard, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import ShortInput from '../../components/ShortInput'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'


const AddLocation = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.mainContainer}>
                <Header
                    navigation={navigation}
                    headerText={'Add Location'}
                />

                <View style={{ marginHorizontal: -15 }}>
                    <Image source={require('../../asset/images/map.png')} style={{ height: 200, width: "100%" }} />
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 25, marginBottom: 10 }}>
                    <Entypo name={'location-pin'} size={35} color={'#00000070'} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: '600', fontSize: 17, color: '#000' }}>Hardees - Barsha Grandlube</Text>
                        <Text style={{ marginTop: 3, color: '#000' }}>Al Barsha</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <ShortInput
                        title={'Flat / Villa No'}
                        style={{ width: "45%" }}
                        placeholder={'15'}
                    />
                    <ShortInput
                        title={'Building / Villa'}
                        style={{ width: "45%" }}
                        placeholder={'Hardees - Barsha'}

                    />
                </View>


                <View style={styles.inputContainer}>
                    <ShortInput
                        title={'Street'}
                        style={{ width: "45%" }}
                        placeholder={'15'}
                    />
                    <ShortInput
                        title={'Area'}
                        style={{ width: "45%" }}
                        placeholder={'Hardees - Barsha'}

                    />
                </View>

                <ShortInput
                    title={'Directions'}
                    style={{ marginTop: 15, marginBottom: 40 }}
                    placeholder={'Hardees - Barsha'}

                />


                <CustomButton
                    title={'Save Locations'}
                    onPress={() => navigation.navigate('OrderSuccessful')}

                />

            </View>
        </TouchableWithoutFeedback>

    )
}

export default AddLocation

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9fa",
        paddingHorizontal: 15

    },
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: Platform.OS == 'android' ? 20 : 40,
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginLeft: "auto",
        marginRight: "auto"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    }
})