import React from 'react';
import { View, Text, SectionList } from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';
import Icon from 'react-native-vector-icons/Ionicons';
import Separator from '../Separator';
import { goToSession } from '../../lib/navigationHelpers';
import styles from './styles.js';

const SessionList = ({ currentNavigatorUID, sessionData }) => {
  console.log(sessionData);
  return (
    <SectionList
      sections={sessionData}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.time}>
            <Moment
              format="h:mm A"
              element={Text}
              unix
              tz="America/Los_Angeles"
            >
              {section.title}
            </Moment>
          </View>
        );
        // return <Text>{section.title}</Text>;
      }}
      renderItem={({ item }) => {
        return (
          <View style={styles.session}>
            <Text
              onPress={() => goToSession(currentNavigatorUID, item)}
              style={styles.title}
            >
              {item.title}
            </Text>
            <View style={styles.favourite}>
              <Text style={styles.location}>{item.location}</Text>
              {item.faveToggle ? (
                <Icon name={'ios-heart'} size={18} color={'#cf392a'} />
              ) : (
                <Text />
              )}
            </View>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.session_id}
      stickySectionHeadersEnabled
    />
  );
};

export default SessionList;
