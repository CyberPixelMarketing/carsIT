import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp';
import OtpCode from '../screens/Auth/OtpCode';
import HomeScreen from '../screens/UserScreens/HomeScreen';
import SelectVehicle from '../screens/UserScreens/SelectVehicle';
import DateTime from '../screens/UserScreens/DateTime';
import CheckoutScreen from '../screens/UserScreens/CheckoutScreen';
import AddLocation from '../screens/UserScreens/AddLocation';
import ServiceProvider from '../screens/UserScreens/ServiceProvider';
import SellerProfile from '../screens/UserScreens/SellerProfile';
import OrderSuccessful from '../screens/UserScreens/OrderSuccessful';
import MyOrders from '../screens/UserScreens/MyOrders';

const Stack = createStackNavigator();
const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SelectVehicle" component={SelectVehicle} />
            <Stack.Screen name="ServiceProvider" component={ServiceProvider} />
            <Stack.Screen name="DateTime" component={DateTime} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
            <Stack.Screen name="AddLocation" component={AddLocation} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="OrderSuccessful" component={OrderSuccessful} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
        </Stack.Navigator>
    )
}

export default UserNavigation

const styles = StyleSheet.create({})