import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp';
import OtpCode from '../screens/Auth/OtpCode';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';

const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
            <Stack.Screen name="UserNavigation" component={UserNavigation} />
        </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})