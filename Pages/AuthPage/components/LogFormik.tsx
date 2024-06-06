import React from 'react';
import {Formik} from 'formik';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/WPStyles.ts';
import {BottomFormik} from './BottomFormik.tsx';

const LogFormik = ({initialValues, screenWidth}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => alert(JSON.stringify(values))}>
      {props => (
        <View style={{minWidth: screenWidth * 0.6}}>
          <TextInput
            placeholderTextColor={'#606367'}
            onChangeText={props.handleChange('email')}
            onBlur={props.handleBlur('email')}
            value={props.values.email}
            placeholder={'Email'}
            style={styles.textInput}
          />
          <TextInput
            placeholderTextColor={'#606367'}
            onChangeText={props.handleChange('password')}
            onBlur={props.handleBlur('password')}
            value={props.values.password}
            placeholder={'Password'}
            style={styles.textInput}
          />
          <BottomFormik props={props} />
        </View>
      )}
    </Formik>
  );
};

export default LogFormik;
