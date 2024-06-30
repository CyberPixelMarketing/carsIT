import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp';
import OtpCode from '../screens/Auth/OtpCode';

const Stack = createStackNavigator();
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpCode" component={OtpCode} />
        </Stack.Navigator>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})