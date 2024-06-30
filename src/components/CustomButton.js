import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/color'

const CustomButton = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.btnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
container:{
    backgroundColor:colors.btnBgColor,
    paddingVertical:15,
    borderRadius:4
},
btnTxt:{
    fontWeight:"700",
    fontSize:18,
    textAlign:"center",
    color:"#fff"
}
})