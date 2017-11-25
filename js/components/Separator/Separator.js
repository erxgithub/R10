import React from 'react';
import { View } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = {
  separator: {
    backgroundColor: '#e6e6e6', // light grey
    height: 1
  }
};

export default Separator;
