import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

const Panel = ({
  setMinHeight,
  setMaxHeight,
  toggle,
  iconName,
  expanded,
  title,
  description
}) => {
  return (
    <Animated.View style={styles.container}>
      <View style={styles.titleContainer} onLayout={setMinHeight}>
        <TouchableHighlight style={styles.button} onPress={toggle}>
          <Icon name={iconName} size={24} color={'#9963ea'} />
        </TouchableHighlight>
        <Text style={styles.title}> {title}</Text>
      </View>

      {expanded ? (
        <View style={styles.body} onLayout={setMaxHeight}>
          <Text style={styles.description}>{description}</Text>
        </View>
      ) : (
        <Text />
      )}
    </Animated.View>
  );
};

export default Panel;
