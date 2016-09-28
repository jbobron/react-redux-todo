import React from 'react';

export function Todo(props) {
  if(props.todo.isDone) {
    return <strike>{props.todo.text}</strike>;
  } else {
    return <span>{props.todo.text}</span>;
  }
}

export function TodoList(props) {

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);

    if(isEnterKey && text.length > 0){
      input.value = '';
      props.addTodo(text); // container has access to addTodo through containers.js line 13
    }
  }

  const toggleClick = id => event => props.toggleTodo(id); //es6 currying


  return (
    <div className='todo'>
      <input type='text' 
             placeholder="Add todo..." 
             onKeyDown={onSubmit}/>
      <ul className='todo_list'>
        {props.todos.map(todo =>
          (
            <li key={todo.get('id')} 
                className='todo_item'
                onClick={toggleClick(todo.get('id'))}>
              <Todo todo={todo.toJS()} />
            </li>
          )
        )}
      </ul>
    </div>
  );
}