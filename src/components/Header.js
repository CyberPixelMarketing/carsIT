import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({headerText,navigation}) => {
    return (
        <View style={styles.headerBox}>
            <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Ionicons name={'arrow-back-outline'} size={20} color={'#000'} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>{headerText}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: Platform.OS == 'android'?20: 40,

        backgroundColor: "#fff",
        paddingBottom: 20,
        paddingHorizontal: 15,

    },
    headerTitle: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 18,
        fontWeight: "700",
        color:"#000"
    },
})