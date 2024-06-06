import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

const TransitionExample = () => {
  const ComponentOne = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Component One</Text>
    </View>
  );

  const ComponentTwo = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Component Two</Text>
    </View>
  );

  const [value, setValue] = useState(0); // State to control which component to show

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [value, animation]);

  const interpolateOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const interpolateTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // Adjust this value to control the translation
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Animated.View
          style={{
            opacity: interpolateOpacity,
            transform: [{translateX: interpolateTranslateX}],
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <ComponentOne />
        </Animated.View>
        <Animated.View
          style={{
            opacity: animation,
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <ComponentTwo />
        </Animated.View>
      </View>
      <TouchableOpacity
        onPress={() => setValue(value === 0 ? 1 : 0)}
        style={{
          position: 'absolute',
          bottom: 20,
          padding: 10,
          backgroundColor: 'blue',
        }}>
        <Text style={{color: 'white'}}>Toggle Component</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransitionExample;
