import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import styles from './styles.js';

const Panel = ({
  height,
  setMinHeight,
  setMaxHeight,
  toggle,
  iconName,
  title,
  description
}) => {
  return (
    <Animated.View style={[styles.container, { height: height }]}>
      <View style={styles.titleContainer} onLayout={setMinHeight}>
        <TouchableHighlight
          style={styles.button}
          onPress={toggle}
          // underlayColor="#f1f1f1"
        >
          {/* <Image style={styles.buttonImage} source={icon} /> */}
          <Icon name={iconName} size={24} color={'#9963ea'} />
        </TouchableHighlight>
        <Text style={styles.title}> {title}</Text>
      </View>

      <View style={styles.body} onLayout={setMaxHeight}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Animated.View>
  );
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // margin: 10,
    overflow: 'hidden',
    paddingBottom: 10
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#9963ea'
    // padding: 10,
    // color: '#9963ea',
    // fontWeight: 'bold'
  },
  description: {
    fontFamily: 'Montserrat-Light',
    fontSize: 15,
    color: '#000000'
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
    tintColor: '#9963ea'
  },
  body: {
    // padding: 10,
    // paddingTop: 0
    paddingBottom: 10
  }
});

export default Panel;
