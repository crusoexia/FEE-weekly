import * as faker from 'faker';
import { times } from 'lodash';
import * as React from 'react';
import './App.css';
import PersonList from './components/PersonList';
import { IPerson } from './types/IPerson';

import logo from './logo.svg';

interface IState {
  persons: IPerson[]
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      persons: times(10, ():IPerson => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      }))
    };  
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <article>
          <PersonList persons={this.state.persons} />
        </article>
      </div>
    );
  }
}

export default App;
