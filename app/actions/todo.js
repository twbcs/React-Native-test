import * as Types from '../types';
import { Alert } from 'react-native';

export function deleteTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: Types.DELETE_TODO,
      payload: todo,
    });
    Alert.alert("恭喜", "移除成功", [{text: "我知道了"}])
  }
}

export function addTodo(todo) {
 return (dispatch) => {
   dispatch({
     type: Types.ADD_TODO,
     payload: todo,
   })
 }
}

export function toggleTodo(todo) {
 return (dispatch) => {
   dispatch({
     type: Types.TOGGLE_TODO,
     payload: todo,
   })
 }
}
