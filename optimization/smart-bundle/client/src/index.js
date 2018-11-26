import * as React from 'react';
import ReactDOM from 'react-dom';
import { times } from 'lodash';
import faker from 'faker';

const dataSource = times(10).map(() => faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

class App extends React.Component {
  render() {
    const { persons } = this.props;
    return (
      <ul>
        {
          persons.map(p => (
            <li key={p}>{p}</li>
          ))
        }
      </ul>
    );
  }
}

ReactDOM.render(<App persons={dataSource} />, document.getElementById('root'));
