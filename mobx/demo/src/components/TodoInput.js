// @flow

import React from 'react';
import { 
  observer,
  inject
} from 'mobx-react';
import { updateInputing } from '../stores/UIStore';

type Props = {
  inputingTodo: string,
  updateInputing: (inputingTodo: string) => void,
  addTodo: (todo: string) => void
};

@observer
class TodoInput extends React.Component<Props> {
  onKeyPress = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      this.props.addTodo(this.props.inputingTodo);
    }
  };

  render() {
    return (
      <input 
        type="text" 
        value={this.props.inputingTodo} 
        onChange={(e) => this.props.updateInputing(e.target.value)}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

export default inject(({ store }) => {
  return {
    inputingTodo: store.uiStore.inputingTodo,
    updateInputing,
    addTodo: store.todoStore.addTodo
  };
})(TodoInput);
