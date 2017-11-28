import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpeaker } from '../../redux/modules/speaker';
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import realm from '../../config/models.js';
import { fetchFaves } from '../../redux/modules/faves';
import { fetchSessions } from '../../redux/modules/sessions';

import Session from './Session';
import styles from './styles.js';

class SessionContainer extends Component {
  constructor(props) {
    super(props);

    realm.addListener('change', () => {
      this.props.dispatch(fetchSessions());
      this.props.dispatch(fetchFaves());
    });
  }

  static route = {
    navigationBar: {
      title: 'Session',
      backgroundColor: '#9963ea',
      tintColor: '#ffffff'
    }
  };

  componentWillMount() {
    //console.log(this.props.sessionData.speaker);
    this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
    this.props.dispatch(fetchSessions());
  }

  render() {
    StatusBar.setBarStyle('light-content');

    const { sessionData, speakerData } = this.props;

    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="small" color="black" />
        </View>
      );
    } else {
      return <Session sessionData={sessionData} speakerData={speakerData} />;
    }
  }
}

const mapStateToProps = ({ speaker }) => ({
  isLoading: speaker.isLoading,
  speakerData: speaker.speakerData
});

export default connect(mapStateToProps)(SessionContainer);
