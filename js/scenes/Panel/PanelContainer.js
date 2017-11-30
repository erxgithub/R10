import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import Panel from './Panel';

class PanelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      expanded: false,
      animation: new Animated.Value()
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    let iconName = 'ios-add';

    if (this.state.expanded) {
      iconName = 'ios-remove';
    }

    return (
      <Panel
        setMinHeight={this._setMinHeight.bind(this)}
        setMaxHeight={this._setMaxHeight.bind(this)}
        toggle={this.toggle.bind(this)}
        iconName={iconName}
        expanded={this.state.expanded}
        title={this.state.title}
        description={this.state.description}
      />
    );
  }
}

export default PanelContainer;
