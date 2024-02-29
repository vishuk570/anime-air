import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/Auth/SplashScreen'
import SignUpScreen from './src/screens/Auth/SignUpScreen'

const App = () => {
  return (
    <>
      {/* <SplashScreen/> */}
      <SignUpScreen/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})