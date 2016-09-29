import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(components.TodoList);

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)), //dispatch sends the action to the store
    toggleTodo: id => dispatch(toggleTodo(id))
  };
}