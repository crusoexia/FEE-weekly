// @flow

import {
  observable,
  action
} from 'mobx';

const UIStore = observable({
  inputingTodo: ''
});

export default UIStore;

// actions

export const updateInputing = action('updateInputing', (content: string) => {
  UIStore.inputingTodo = content;
});
