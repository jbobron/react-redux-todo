import React from 'react';

export function Todo(props) {
  if(props.todo.isDone) {
    return <strike>{props.todo.text}</strike>;
  } else {
    return <span>{props.todo.text}</span>;
  }
}

export function TodoList(props) {
  return (
    <div className='todo'>
      <input type='text' placeholder="Add todo..." />
      <ul className='todo_list'>
        {props.todos.map(todo =>
          (
            <li key={todo.id} className='todo_item'>
              <Todo todo={todo} />
            </li>
          )
        )}
      </ul>
    </div>
  );
}