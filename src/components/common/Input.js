// @flow
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    flex: 1,
  },
});

type Props = {
  value: String,
  onChangeText: Function,
  label: String,
  placeholder?: String,
  keyboardType?: String,
  secureTextEntry?: Boolean,
};

const Input = (props:Props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const {
    value,
    onChangeText,
    label,
    placeholder,
    keyboardType,
    secureTextEntry,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: 'default',
  secureTextEntry: false,
  placeholder: '',
};

export default Input;
