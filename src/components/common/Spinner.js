// @flow
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  small?: Boolean
}

const Spinner = ({ small }: Props) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={small ? 'small' : 'large'} />
  </View>
);

Spinner.defaultProps = {
  small: false,
};

export default Spinner;
