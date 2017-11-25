import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchSpeaker } from '../../redux/modules/speaker';
// import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import Speaker from './Speaker';

export default class SpeakerContainer extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return <Speaker speakerData={this.props.speakerData} />;
  }
}

// const mapStateToProps = ({ speaker }) => ({
//   isLoading: speaker.isLoading,
//   speakerData: speaker.speakerData
// });

// export default connect(mapStateToProps)(SpeakerContainer);
