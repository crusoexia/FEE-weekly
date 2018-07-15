// @flow

import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';
import AppStore from '../stores/AppStore';

const { todoStore } = AppStore;

export default observer(function TodoList() {
  return (
    <Fragment>
      <ul className="list-group list-group-flush">
        {
          todoStore.incompleteTodos.map(todo => (
            <li key={todo.id} className="list-group-item">
              <Todo 
                todo={todo} 
                editing={todoStore.editingTodo === todo.id} 
                onEditContent={(t) => todoStore.editTodo(t.id)}
                onStopEditContent={() => todoStore.stopEditTodo()}
              />
            </li>
          ))
        }
      </ul>
      <pre>{todoStore.completedCount} completed</pre>
    </Fragment>
  );
});
