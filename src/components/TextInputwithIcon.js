import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
  } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/themes'

const TextInputwithIcon = ({
    placeholder,
    iconName,
    value,
    inputStyle = {},
    rightIcon,
    onPressRight,
    onChangeText = () => {},
    ...props
}) => {
  return (
    <View style={{...styles.inputContainer,...inputStyle}}>
        <Icon name={iconName} size={20} style={styles.inputIcon} />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.Icon_Color}
            value={value}
            onChangeText={onChangeText}
            {...props}
          />
    </View>
  )
}

export default TextInputwithIcon;

const styles = StyleSheet.create({
    inputContainer: {
        paddingLeft: moderateScale(10),
        borderWidth: 1,
        borderColor: colors.Icon_Color,
        marginVertical:moderateVerticalScale(10),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        height: '100%',
        paddingLeft: moderateScale(10),
        color:colors.Icon_Color
      },
      inputIcon: {
        marginRight: moderateScale(10),
        color:colors.Icon_Color
      },
})