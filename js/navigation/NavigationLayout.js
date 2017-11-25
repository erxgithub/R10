import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import LinearGradient from 'react-native-linear-gradient';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';

import Router from './router.js';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: '#ffffff',
    backgroundColor: '#9963ea'
  }
};

export default class NavigationLayout extends Component {
  renderIcon(iconName, isSelected) {
    let color = isSelected ? '#ffffff' : '#999999'; // white and medium grey
    return <Icon name={iconName} size={24} color={color} />;
  }

  renderTitle(isSelected, title) {
    let color = isSelected ? '#ffffff' : '#999999'; // white and medium grey
    let titleStyle = {
      color: color,
      fontFamily: 'Montserrat-Regular',
      fontSize: 10
    };

    return <Text style={titleStyle}>{title}</Text>;
  }

  render() {
    return (
      <TabNavigation tabBarColor="#000000" initialTab="schedule">
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            navigatorUID="schedule"
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="map"
          title="Map"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-map', isSelected)}
        >
          {/* <StackNavigation navigatorUID="map" initialRoute={Router.getRoute('map')} /> */}
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
        >
          {/* <StackNavigation
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          /> */}
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon('ios-information-circle', isSelected)
          }
        >
          <StackNavigation
            navigatorUID="about"
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}
