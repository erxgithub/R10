import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { goToSpeaker } from '../../lib/navigationHelpers';
import Moment from 'react-moment';
import 'moment-timezone';
import Separator from '../../components/Separator';
import styles from './styles.js';

const Session = ({ sessionData, speakerData }) => {
  //const { session_id } = sessionData;
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
          ''
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
      <View style={styles.button}>
        <Text onPress={() => {}} style={styles.remove}>
          Remove from Faves
        </Text>
      </View>
    </View>
  );
};

export default Session;
