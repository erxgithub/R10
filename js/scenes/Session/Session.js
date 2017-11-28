import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { goToSpeaker, closeSession } from '../../lib/navigationHelpers';
import Moment from 'react-moment';
import 'moment-timezone';
import LinearGradient from 'react-native-linear-gradient';

import Separator from '../../components/Separator';
import { createFave, deleteFave } from '../../config/models.js';

import styles from './styles.js';

const Session = ({ sessionData, speakerData }) => {
  //const { session_id } = sessionData;
  const faveId = sessionData.session_id;

  console.log(sessionData);
  console.log(speakerData);

  return (
    <View style={styles.session}>
      <Text style={styles.location}>{sessionData.location}</Text>
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
              closeSession();
            }}
            style={styles.buttonText}
          >
            Remove from Faves
          </Text>
        ) : (
          <Text
            onPress={() => {
              createFave(faveId);
              closeSession();
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
