// @flow

import { uniqueId } from 'lodash';
import { observable, action, computed } from 'mobx';

export default class Todo {
  id: string;
  @observable content: string;
  @observable completed: boolean;

  constructor({ id = uniqueId('todo'), content, completed = false }: { 
    id?: string,
    content: string,
    completed?: boolean 
  }) {
    Object.assign(this, { id, content, completed });
  }

  @computed get inversedComplete() {
    console.log(`[Todo_${this.id}]#inversedComplete changed`);
    return !this.completed;
  }

  @action.bound complete(completed: boolean) {
    this.completed = completed;
  }

  @action.bound update(content: string) {
    this.content = content;
  }
}
