import React from 'react';
import { object } from 'prop-types';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { COLORS, SIZES, FONTS, images } from '../constant';

function Login({ navigation }) {
  const renderGreetings = () => {
    return (
      <View style={styLogin.wrapGreetings}>
        <Text style={styLogin.textGreetings1}>Welcome to</Text>
        <Text style={styLogin.textGreetings2}>DoctoFinder</Text>
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View style={styLogin.wrapForm}>
        <TextInput style={styLogin.inputText} placeholderTextColor={COLORS.black} placeholder="Phone Number" keyboardType="decimal-pad" />
        <TextInput style={styLogin.inputText} placeholderTextColor={COLORS.black} placeholder="Password" secureTextEntry />

        <View>
          <GradientButton
            style={styLogin.btnLogin}
            gradientBegin={COLORS.blue}
            gradientEnd={COLORS.darkBlue}
            text="Log in"
            textStyle={styLogin.textLogin}
            width="100%"
            height={56}
            onPressAction={() => navigation.replace('Navigation')}
          />
        </View>

        {/* Register */}
        <View style={styLogin.wrapRegister}>
          <Text style={styLogin.textRegister}>{'Don\'t have an account?'}</Text>
          <TouchableOpacity
            style={styLogin.wrapRegisterLink}
            onPress={() => console.log('register')}
          >
            <Text style={styLogin.textRegisterLink}>Create New</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styLogin.container} showsVerticalScrollIndicator={false}>
      <ImageBackground  source={images.LoginBG} resizeMode="contain" style={styLogin.bgLogin}>
        {/* Logo */}
        <View style={styLogin.wrapLogo}>
          <Image source={images.DocLogo} style={styLogin.imgLogo} />
        </View>
      </ImageBackground>
      {renderGreetings()}
      {renderForm()}
    </ScrollView>
  );
}

const styLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bgLogin: {
    width: '100%',
    height: 254,
  },
  wrapLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-30%',
    left: 0,
    right: 0,
  },
  imgLogo: {
    width: 169,
    height: 160,
  },
  wrapGreetings: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: SIZES.margin2 * 9,
  },
  textGreetings1: {
    color: COLORS.secondary,
    fontSize: SIZES.body1,
    fontWeight: 'bold',
    marginBottom: SIZES.margin,
  },
  textGreetings2: {
    color: COLORS.primary,
    ...FONTS.h1,
  },
  wrapForm: {
    flexDirection: 'column',
    marginTop: SIZES.margin2 * 4,
    marginHorizontal: SIZES.margin2 * 2,
    marginBottom: SIZES.margin2 * 2,
  },
  inputText: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SIZES.padding2,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.margin2,
  },
  btnLogin: {
    marginLeft: 0,
    marginTop: SIZES.margin2 * 2,
  },
  textLogin: {
    fontSize: SIZES.h3,
  },
  wrapRegister: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop: SIZES.margin2,
  },
  textRegister: {
    color: COLORS.secondary,
  },
  wrapRegisterLink: {
    marginLeft: SIZES.margin,
  },
  textRegisterLink: {
    color: COLORS.primary,
  },
});

Login.propTypes = {
  navigation: object,
};

Login.defaultProps = {
  navigation: {},
};

export default Login;