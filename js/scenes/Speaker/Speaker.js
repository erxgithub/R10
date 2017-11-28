import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { goBack } from '../../lib/navigationHelpers';
import styles from './styles.js';

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.content}>
      <Header
        leftComponent={
          <Icon name="close" color="#ffffff" onPress={() => goBack()} />
        }
        centerComponent={{
          text: 'About the Speaker',
          style: {
            color: '#ffffff',
            fontFamily: 'Montserrat-Regular',
            fontSize: 15
          }
        }}
        backgroundColor="#000000"
        statusBarProps={{ barStyle: 'light-content' }}
        outerContainerStyles={{
          borderBottomColor: '#000000'
        }}
      />
      <View style={styles.presenter}>
        <View style={styles.picture}>
          {speakerData.image.length > 0 ? (
            <Image source={{ uri: speakerData.image }} style={styles.avatar} />
          ) : (
            <Text />
          )}
        </View>
        <View style={styles.speaker}>
          <Text style={styles.name}>{speakerData.name}</Text>
        </View>
        <Text style={styles.bio}>{speakerData.bio}</Text>
        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={styles.button}
        >
          <Text
            onPress={() => Linking.openURL(speakerData.url)}
            style={styles.readMore}
          >
            Read More on Wikipedia
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Speaker;
