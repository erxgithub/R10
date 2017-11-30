import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../redux/modules/sessions';
import { fetchFaves } from '../../redux/modules/faves';
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Schedule from './Schedule';
import realm from '../../config/models.js';

import styles from './styles.js';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);

    realm.addListener('change', () => {
      this.props.dispatch(fetchSessions());
      this.props.dispatch(fetchFaves());
    });
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
      backgroundColor: '#9963ea',
      tintColor: '#ffffff'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchSessions());
    this.props.dispatch(fetchFaves());
  }

  render() {
    StatusBar.setBarStyle('light-content');

    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="small" color="black" />
        </View>
      );
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
