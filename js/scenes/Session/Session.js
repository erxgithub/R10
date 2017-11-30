import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { goToSpeaker, goBack } from '../../lib/navigationHelpers';
import Moment from 'react-moment';
import 'moment-timezone';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import Separator from '../../components/Separator';
import { createFave, deleteFave } from '../../config/models.js';

import styles from './styles.js';

const Session = ({ sessionData, speakerData, navigatorUID }) => {
  //const { session_id } = sessionData;
  const faveId = sessionData.session_id;

  return (
    <View style={styles.session}>
      <View style={styles.favourite}>
        <Text style={styles.location}>{sessionData.location}</Text>
        {sessionData.faveToggle ? (
          <Icon name={'ios-heart'} size={24} color={'#cf392a'} />
        ) : (
          <Text />
        )}
      </View>
      <Text style={styles.title}>{sessionData.title}</Text>
      <View>
        <Moment
          format="h:mm A"
          element={Text}
          unix
          tz="America/Los_Angeles"
          style={styles.time}
        >
          {sessionData.start_time}
        </Moment>
      </View>
      <Text style={styles.description}>{sessionData.description}</Text>
      {/* <Text>{session_id}</Text> */}
      <Text style={styles.presented}>Presented by:</Text>
      <View style={styles.presenter}>
        {speakerData.image.length > 0 ? (
          <Image source={{ uri: speakerData.image }} style={styles.avatar} />
        ) : (
          <Text />
        )}
        <View style={styles.speaker}>
          <Text style={styles.name} onPress={() => goToSpeaker(speakerData)}>
            {speakerData.name}
          </Text>
        </View>
      </View>
      <View style={styles.separator}>
        <Separator />
      </View>
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={styles.button}
      >
        {sessionData.faveToggle ? (
          <Text
            onPress={() => {
              deleteFave(faveId);
              goBack(navigatorUID);
            }}
            style={styles.buttonText}
          >
            Remove from Faves
          </Text>
        ) : (
          <Text
            onPress={() => {
              createFave(faveId);
              goBack(navigatorUID);
            }}
            style={styles.buttonText}
          >
            Add to Faves
          </Text>
        )}
      </LinearGradient>
    </View>
  );
};

export default Session;
