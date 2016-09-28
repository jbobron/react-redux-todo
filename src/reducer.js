
import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(x => {
        if(x.get('id') === action.payload){
          return x.update('isDone', isDone => !isDone);
        } else {
          return x;
        }
      });

      //my implementation
      // todos.update(
      //   todos.findIndex(obj => {
      //     return item.get('id') === action.payload;
      //   }), function(item) {
      //     return item.update('isDone', isDone => !isDone);
      //   }
      // );
    default: 
      return todos;
  }
}