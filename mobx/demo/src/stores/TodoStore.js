// @flow

import { 
  observable,
  computed,
  action,
  runInAction
} from 'mobx';
import Todo from '../domain/Todo';
import { fetchTodos } from '../endPoints/todoEndPoint';

export default class TodoStore {
  @observable todos: Todo[] = [];
  @observable editingTodo: ?string;

  @computed get incompleteTodos(): Todo[] {
    console.log('[TodoStore]#incompleteTodos changed');
    return this.todos.filter((td: Todo) => !td.completed);
  }

  @computed get completedCount() {
    console.log('[TodoStore]#completedCount changed');
    return this.todos.filter(td => td.completed).length;
  }

  constructor(todos?: Todo[] = []) {
    todos.forEach(td => this.todos.push(td));
  }

  @action.bound async fetchTodos() {
    const todos = await fetchTodos();
    console.log(todos);
    runInAction(() => {
      this.todos = todos.map(t => new Todo(t));
    });
  }

  @action.bound addTodo(content: string) {
    this.todos.push(new Todo({ content }));
  }

  @action.bound editTodo(todoId: string) {
    this.editingTodo = todoId;
  }

  @action.bound stopEditTodo() {
    this.editingTodo = null;
  }
}
