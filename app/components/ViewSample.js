import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ViewSample extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: '標題',
   }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
