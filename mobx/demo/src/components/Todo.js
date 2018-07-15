// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { debounce } from 'lodash';
import TodoDomainModel from '../domain/Todo';

type Props = {
  editing: boolean,
  todo: TodoDomainModel,
  onEditContent: (todo: TodoDomainModel) => void,
  onStopEditContent: (todo: TodoDomainModel) => void
};

@observer
export default class Todo extends React.Component<Props> {
  contentInput: ?HTMLInputElement;

  onChangeComplete = (e: SyntheticEvent<HTMLInputElement>) => {
    e.persist();
    this.debouncedChangeComplete(e);
  };

  debouncedChangeComplete = debounce((e) => this.props.todo.complete(e.target.checked), 500);

  onDoubleClickContent = () => {
    this.props.onEditContent(this.props.todo);
  };

  onKeyPress = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      this.props.onStopEditContent(this.props.todo);
    }
  };

  onBlurInput = () => {
    this.props.onStopEditContent(this.props.todo);
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.onChangeComplete} />
        {
          this.props.editing ?
            <input 
              type="text" 
              value={this.props.todo.content} 
              onChange={(e) => this.props.todo.update(e.target.value)} 
              onBlur={this.onBlurInput}
              onKeyPress={this.onKeyPress}
              ref={input => { this.contentInput = input; }}
            /> :
            <span 
              className="todo__content" 
              onDoubleClick={this.onDoubleClickContent}>
              {this.props.todo.content}
            </span>
        }
      </div>
    );
  }

  componentDidUpdate() {
    if (this.props.editing && this.contentInput) {
      this.contentInput.focus();
    }
  }
}
