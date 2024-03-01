import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../constants/themes'

const ButtonComp = ({
  btnText, 
  btnStyle = {}, 
  onPress = () => {},
  img,
  btnTextStyle = {}
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
        {
          !!img ? <Image style={{tintColor:colors.base_color}} source={img}/> :
          <Text style={{...styles.btnTextStyle ,...btnTextStyle }}>{btnText}</Text>
        }
      
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: colors.Business_Name_Color,
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: scale(12),
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});