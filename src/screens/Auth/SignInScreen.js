import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import TextInputwithIcon from '../../components/TextInputwithIcon';
import ButtonComp from '../../components/ButtonComp';
import colors from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppLogo from '../../components/AppLogo';
import axios from 'axios';
import { API_URL } from "@env"

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const submit = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const data = {
      email: email,
      password: password,
    }
    console.log("data", data);
    const res = await axios.post(`${API_URL}/auth/login`,data)
    console.log(res.data);
  }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.mainContainer}>
      <AppLogo style={styles.img} />
      <Text style={styles.welcome}>Welcome back to Anime Air...!</Text>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainStyle}>
          <TextInputwithIcon
            placeholder="Email"
            iconName="user"
            value={email}
            onChangeText={(actualData) => setEmail(actualData)}
          />
          <TextInputwithIcon
            placeholder="Password"
            iconName="lock"
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
          />
          {/* <TouchableOpacity style={styles.forgetView} onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </TouchableOpacity> */}
          <ButtonComp
            btnText="Log In"
            btnStyle={{ marginTop: 30 }}
            onPress={() => submit()}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={{ color: colors.Icon_Color }}>Not a member? </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: '700', color: colors.Business_Name_Color }} onPress={() => navigation.navigate('SignUp')}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.Background_Color
  },
  welcome: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.Icon_Color
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(44),
  },
  forgetView: {
    alignSelf: 'flex-end',
    // marginVertical: moderateVerticalScale(24),
  },
  forgetText: {
    color: colors.Business_Name_Color,
    fontSize: scale(16),
    fontWeight: '600',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(72),
    marginBottom: moderateVerticalScale(40)
  },
  img: {
    height: moderateVerticalScale(140),
    width: moderateScale(140),
    alignSelf: 'center'
  },
});