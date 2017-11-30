import React from 'react';
import {
  ScrollView,
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import Separator from '../../components/Separator';
import styles from './styles.js';
import Panel from '../Panel';

const About = ({ conductData, isLoading, toggleView }) => {
  return (
    <ScrollView style={styles.about}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <View style={styles.separator}>
        <Separator />
      </View>
      <Text style={styles.text}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.heading}>Date & Venue</Text>
      <Text style={styles.text}>
        The R10 converence will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.heading}>Code of Conduct</Text>
      <FlatList
        data={conductData}
        renderItem={({ item }) => (
          <Panel title={item.title} description={item.description} />
        )}
        keyExtractor={item => item.title}
      />
      <View style={styles.separator}>
        <Separator />
      </View>
      <Text style={styles.text}>&copy; RED Academy 2017</Text>
    </ScrollView>
  );
};

export { About };
