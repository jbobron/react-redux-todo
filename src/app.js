import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { TodoList } from './components';
import reducer from './reducer';

// const dummyTodos = List([
//   { id: 0, isDone: true,  text: 'upload blueprints' },
//   { id: 1, isDone: false, text: 'merge updates' },
//   { id: 2, isDone: false, text: 'meet with contractors' },
//   { id: 3, isDone: false, text: 'crush it' }
// ]);

const store = createStore(reducer);

render(
  <TodoList todos={store.getState()} />,
  document.getElementById('app')
);
