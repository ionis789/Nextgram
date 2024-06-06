import React from 'react';
import {Formik} from 'formik';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/WPStyles.ts';
import {FormValues} from '../types/WPTypes.ts';
interface RegFormikProps {
  initialValues: FormValues;
  screenWidth: number;
}
const RegFormik = ({initialValues, screenWidth}: RegFormikProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => alert(JSON.stringify(values))}>
      {props => (
        <View style={{minWidth: screenWidth * 0.6}}>
          <TextInput
            placeholderTextColor={'#606367'}
            onChangeText={props.handleChange('name')}
            onBlur={props.handleBlur('name')}
            value={props.values.name}
            placeholder={'Name'}
            style={styles.textInput}
          />
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
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              paddingTop: 10,
            }}>
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={styles.submitButtonContainer}>
              <Text style={styles.submitButton}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegFormik;
