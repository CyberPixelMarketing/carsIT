import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'
import OrderSuccessful from './src/screens/UserScreens/OrderSuccessful'
import MyOrders from './src/screens/UserScreens/MyOrders'
import SellerProfile from './src/screens/UserScreens/SellerProfile'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})