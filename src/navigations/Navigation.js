import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from '../screens/Auth/SplashScreen'
import SignUpScreen from '../screens/Auth/SignUpScreen'
import SignInScreen from '../screens/Auth/SignInScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default Navigation;

const styles = StyleSheet.create({})