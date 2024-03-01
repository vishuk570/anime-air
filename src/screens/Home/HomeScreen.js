import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../../constants/themes'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.Background_Color
    }
})