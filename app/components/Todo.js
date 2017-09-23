import React, { Component } from 'react';
import { View, TextInput, Text, Button, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Dimensions, ImageBackground, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo, toggleTodo, deleteTodo} from '../actions/todo.js';

const { width, height } = Dimensions.get('window')

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo, toggleTodo, deleteTodo}, dispatch);
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      todos: this.props.todos,
    }
  }

  render() {
    console.log(this.state.todos);
    return (
      <ImageBackground
      style={{flex: 1, backgroundColor: 'transparent'}}
      imageStyle={{width: undefined, height: undefined}}
      source={{uri: 'https://c1.staticflickr.com/9/8601/16004758626_7335d84ffd_b.jpg'}}
      >
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}>
          <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <StatusBar barStyle="light-content"/>
            <Text
            numberOfLines={1}
            style={{fontSize: 30, backgroundColor: 'transparent', color: '#aaf', textShadowOffset: {width: 1, height: 1}, textShadowColor: '#ccc'}}
            >
            參加聖杯戰爭吧!!!
            </Text>
            <View>
            <TextInput
              style={{width: 300, height: 36, backgroundColor: '#fff', marginTop: 20, paddingLeft: 10}}
              maxLength={8}
              keyboardType='phone-pad'
              placeholder="帳號"
            />
            <TextInput
              style={{width: 300, height: 36, backgroundColor: '#fff', marginTop: 20, paddingLeft: 10}}
              secureTextEntry={true}
              maxLength={8}
              placeholder="密碼"
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => alert('xxxx')}
            >
            <Text
              style={{
                fontWeight: '900',
                marginTop: 20,
                backgroundColor: '#dddd00',
                color: '#fff',
                width: 300, height: 30,
                fontSize: 20, textAlign: 'center',
                paddingTop: 5}}>
              登入</Text>
            </TouchableOpacity>
            </View>
         </View>
        </TouchableWithoutFeedback>
      </ImageBackground>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
