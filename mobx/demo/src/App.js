// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

type Props = {
  onAppMounted: () => void
};

class App extends Component<Props, {}> {
  componentDidMount() {
    this.props.onAppMounted();  
  }

  render() {
    return (
      <div className="App">
        <section>
          <TodoInput />
          <TodoList />
        </section>
      </div>
    );
  }
}

export default inject(({ store }) => {
  return {
    onAppMounted: store.appMounted
  }
})(App);
