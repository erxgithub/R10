import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';

const Speaker = ({ speakerData }) => {
  return (
    <View style={styles.presenter}>
      <Text>About the Speaker</Text>
      <View style={styles.picture}>
        {speakerData.image.length > 0 ? (
          <Image source={{ uri: speakerData.image }} style={styles.avatar} />
        ) : (
          ''
        )}
      </View>
      <View style={styles.speaker}>
        <Text style={styles.name}>{speakerData.name}</Text>
      </View>
      <Text style={styles.bio}>{speakerData.bio}</Text>
      <View style={styles.button}>
        <Text onPress={() => {}} style={styles.readMore}>
          Read More on Wikipedia
        </Text>
      </View>
    </View>
  );
};

export default Speaker;
