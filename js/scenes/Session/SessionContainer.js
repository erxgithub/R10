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
// import realm from '../../config/models.js';

import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
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
    // console.log(realm.path);
  }

  render() {
    StatusBar.setBarStyle('light-content');

    const { sessionData, speakerData } = this.props;

    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} size="small" color="black" />;
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
