import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/color'

const ShortInput = ({title,style,placeholder}) => {
    return (
        <View style={style}>
            <Text style={{fontSize:15,color:colors.plcHolder,fontWeight:"500",marginBottom:10}}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.inputField,]}
                placeholderTextColor={colors.plcHolder}
                
            />
        </View>
    )
}

export default ShortInput

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        height: 40,
        width: '100%',
        paddingLeft: 10,
        borderColor:"#9c9c9c",
        borderRadius:3,
        color:"#000"
    }
})