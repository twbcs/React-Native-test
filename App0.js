import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ViewSample from './app/components/view_sample';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      todos: [],
    }
  }
  createTodo = () => {
    let {todos} = this.state;
    todos.push({
      id: todos.length + 1,
      content: this.state.value,
      checked: false,
    });
    this.setState({todos, value: null});
  }
  complate = (toggleTodo) => {
    let filteredTodos = this.state.todos.filter((todo) => todo.id !== toggleTodo.id);
    this.setState({
      todos: [...filteredTodos, {...toggleTodo, checked: !toggleTodo.checked}].sort((a,b) => a.id < b.id)
    })
  }
  showTodoList = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <View key={`todo_${index}`} style={{flexDirection: 'row', padding: 10,}}>
          <Button
            onPress={() => this.complate(todo)}
            title="完成"
            color="#841584"
            accessibilityLabel="完成"
          />
          <Text style={{textDecorationLine: (todo.checked ? 'line-through' : 'none')}}>{todo.content}</Text>
        </View>
      );
    })
  }
  componentWillReceiveProps() {
    console.log("component will receive props");
  }
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  clearInput() {
    this.setState({value: null})
  }
  render() {
    return (
      <View style={styles.container}>
      {/* 註解 */}
        <View>
          <Text>輸入</Text>
          <TextInput
            style={{width: '80%', fontSize: 24, borderColor: 'gray', borderWidth: 1}}
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
          />
        </View>
        <ViewSample title="標題1" />
        <Button
          onPress={() => this.clearInput()}
          title="Clear Input"
          color="#841584"
          accessibilityLabel="清除輸入值"
        />
        <Button
          onPress={() => this.createTodo()}
          title="送出"
          color="#841584"
          accessibilityLabel="送出"
        />
        <View style={{width: '100%', borderTopWidth: 2}}>
          {this.showTodoList()}
        </View>
      </View>
    );
  }
}

//const Child = (props) => {
//  return (
//    <View style={{height: '20%', justifyContent: 'center', alignItems: 'center'}}>
//      <Text allowFontScaling={false}>{props.value}</Text>
//    </View>
//  );
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    top: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fcf',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  titleText: {
    color: '#f0f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textX: {
    color: '#cc0000',
    fontSize: 40,
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
