import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const FilterButton = ({selected,setSelected}) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={()=>setSelected('upcoming')} style={[styles.innerContainer,{backgroundColor:selected == 'upcoming' ? '#000' : "#fff"}]}>
                <Text style={{color:selected == 'upcoming' ? '#fff' : "#000",fontWeight:"600",fontSize:17}}>Upcoming</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>setSelected('past')} style={[styles.innerContainer,{backgroundColor:selected == 'past' ? '#000' : "#fff"}]}>
                <Text style={{color:selected == 'past' ? '#fff' : "#000",fontWeight:"600",fontSize:17}}>Past</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FilterButton

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        borderWidth: 1,
        // borderRadius: 1,
        justifyContent: "space-between",
        marginHorizontal:15,
        marginVertical:40
    },
    innerContainer: {
        width: "50%",
        alignItems: "center",
        paddingVertical:8
    }
})