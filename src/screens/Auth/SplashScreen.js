import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../constants/themes'
import AppLogo from '../../components/AppLogo'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <AppLogo style={styles.img} />
      <ActivityIndicator size="large" color={color.Business_Name_Color} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Background_Color,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: moderateVerticalScale(230),
    width: moderateScale(230),
  },
})