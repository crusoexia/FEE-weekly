// @flow

import { action } from 'mobx';
import TodoStore from './TodoStore';
import UIStore from './UIStore';
import TodoDomainModel from '../domain/Todo';

class AppStore {
  todoStore = new TodoStore([
    //new TodoDomainModel('Hello MobX!'),
    //new TodoDomainModel('Input todo to start!')
  ]);
  uiStore = UIStore;

  @action.bound appMounted() {
    this.todoStore.fetchTodos();
  }
}

export default new AppStore();
