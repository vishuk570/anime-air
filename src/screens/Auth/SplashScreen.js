import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import color from '../../constants/themes'

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(()=>{
      alert('stop')
    },3000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/Logos/logo.png')}/>
      <ActivityIndicator size="large" color={color.Business_Name_Color}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:color.Background_Color,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    height:250,
    width:250
  },
})