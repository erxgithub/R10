import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../redux/modules/sessions';
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Schedule from './Schedule';

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
      backgroundColor: '#9963ea',
      tintColor: '#ffffff'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchSessions());
  }

  render() {
    //console.log(this.props.sessionData);
    // console.log('isloading', this.props.conductData);
    StatusBar.setBarStyle('light-content');

    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} size="small" color="black" />;
    } else {
      return (
        <Schedule
          sessionData={this.props.sessionData}
          isLoading={this.props.isLoading}
        />
      );
    }
  }
}

const mapStateToProps = ({ sessions }) => ({
  sessionData: sessions.sessionData,
  isLoading: sessions.isLoading
});

export default connect(mapStateToProps)(ScheduleContainer);
