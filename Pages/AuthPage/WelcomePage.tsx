import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/WPStyles.ts';
import {FormValues, authModeTypes} from './types/WPTypes.ts';
import RegFormik from './components/RegFormik.tsx';
import LogFormik from './components/LogFormik.tsx';
const WelcomePage = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
    name: '',
  };

  const [authMode, setAuthMode] = useState<authModeTypes>(null);

  useEffect(() => {
    console.log(authMode);
  }, [authMode]);

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.topFormContainer}>
          <TouchableOpacity onPress={() => setAuthMode('register')}>
            <Animated.View
              style={[
                authMode === 'register'
                  ? styles.topFormContainerTextRegisterPressed
                  : styles.topFormContainerText,
                {},
              ]}>
              <Text
                style={[
                  authMode === 'register'
                    ? styles.headerTextPressed
                    : styles.headerText,
                ]}>
                Register
              </Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setAuthMode('login')}>
            <Animated.View
              style={[
                authMode === 'login'
                  ? styles.topFormContainerTextLoginPressed
                  : styles.topFormContainerText,
                {},
              ]}>
              <Text
                style={
                  authMode === 'login'
                    ? styles.headerTextPressed
                    : styles.headerText
                }>
                Log In
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>

        <View>
          {authMode === 'register' && (
            <RegFormik
              initialValues={initialValues}
              screenWidth={screenWidth}
            />
          )}
          {authMode === 'login' && (
            <LogFormik
              initialValues={initialValues}
              screenWidth={screenWidth}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
