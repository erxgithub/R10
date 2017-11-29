import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchSpeaker } from '../../redux/modules/speaker';
// import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import Speaker from './Speaker';

export default class SpeakerContainer extends Component {
  static route = {
    navigationBar: {
      // visible: true,
      visible: false,
      backgroundColor: '#9963ea',
      tintColor: '#ffffff'
    }
  };

  render() {
    StatusBar.setBarStyle('light-content');
    const navigatorUID = this.props.navigator.navigatorUID;
    return (
      <Speaker
        speakerData={this.props.speakerData}
        navigatorUID={navigatorUID}
      />
    );
  }
}

// const mapStateToProps = ({ speaker }) => ({
//   isLoading: speaker.isLoading,
//   speakerData: speaker.speakerData
// });

// export default connect(mapStateToProps)(SpeakerContainer);
