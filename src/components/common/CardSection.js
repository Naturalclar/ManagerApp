// @flow
import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

type Props = {
  children : React.Node,
}

const CardSection = ({ children }: Props) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

export default CardSection;
