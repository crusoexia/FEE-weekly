import React, { Component } from 'react';
import _ from 'lodash';
import faker from 'faker';
import logo from './logo.svg';
import Table from './Table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true,
      rows: _.times(1000, () => ({
        id: _.uniqueId(),
        name: faker.name.findName()
      }))
    }
  }

  clearMessage = () => {
    this.setState({ showMessage: false });
  }

  render() {
    const { showMessage, rows } = this.state;

    /* Implementation 1 */

    if (showMessage) {
      return (
        <div className="App">
          <h2>Notification message</h2> 
          <button onClick={this.clearMessage}>clear message</button>
          <Table rows={rows} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <button onClick={this.clearMessage}>clear message</button>
          <Table rows={rows} />
        </div>
      )
    }

    /* Implementation 2 */

    //return (
      //<div className="App">
        //{ showMessage && <h2>Notification message</h2> }
        //<button onClick={this.clearMessage}>clear message</button>
        //<Table rows={rows} />
      //</div>
    //)

    /* Implementation 3 */

    //if (showMessage) {
      //return (
        //<div className="App">
          //<h2 key="h2">Notification message</h2> 
          //<button key="button" onClick={this.clearMessage}>clear message</button>
          //<Table key="table" rows={rows} />
        //</div>
      //)
    //} else {
      //return (
        //<div className="App">
          //<button key="button" onClick={this.clearMessage}>clear message</button>
          //<Table key="table" rows={rows} />
        //</div>
      //)
    //}
  }
}

export default App;
