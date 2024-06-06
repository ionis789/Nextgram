import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/WPStyles.ts';
export const BottomFormik = ({props}) => {
  return (
    <View>
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
      <Text>
        <MaterialCommunityIcons
          name={'google'}
          style={{
            color: '#000',
            fontSize: 32,
            backgroundColor: '#79F1A1',
          }}
        />
      </Text>
    </View>
  );
};
