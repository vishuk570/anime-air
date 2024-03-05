import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputwithIcon from '../../components/TextInputwithIcon';
import ButtonComp from '../../components/ButtonComp';
import colors from '../../constants/themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AppLogo from '../../components/AppLogo';
import { API_URL } from "@env"

const SignUpScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const submit = async () => {
        if (!name.trim()) {
            alert("Please enter your full name.");
            return;
        }
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
            username: name,
            email: email,
            password: password,
        }
        console.log("data", data);
        const res = await axios.post(`${API_URL}/auth/signup`,data)
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
            <View style={styles.container}>
                <AppLogo style={styles.img} />
                <Text style={styles.welcome}>Register to Anime Air...!</Text>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainStyle}>
                        <TextInputwithIcon
                            placeholder="Full Name"
                            iconName="user"
                            value={name}
                            onChangeText={(actualData) => setName(actualData)}
                        />
                        <TextInputwithIcon
                            placeholder='Email'
                            iconName="user"
                            value={email}
                            onChangeText={(actualData) => setEmail(actualData)}
                            keyboardType='email-address'
                        />
                        <TextInputwithIcon
                            placeholder="Password"
                            iconName="lock"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(actualData) => setPassword(actualData)}
                        />
                        <ButtonComp
                            btnText="SignUp"
                            btnStyle={{ marginTop: 20 }}
                            onPress={() => submit()}
                        />
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{ color: colors.Icon_Color }}>Already Register? </Text>
                        <TouchableOpacity>
                            <Text
                                style={{ fontWeight: '700', color: colors.Business_Name_Color }}
                                onPress={() => navigation.navigate('SignIn')
                                }>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
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
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateVerticalScale(50),
        marginBottom: moderateVerticalScale(40)
    },
    img: {
        height: moderateVerticalScale(140),
        width: moderateScale(140),
        alignSelf: 'center'
    },
})