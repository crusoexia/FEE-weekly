import React from 'react';

//export default class Table extends React.PureComponent {
export default class Table extends React.Component {

  componentDidMount() {
    console.log('Table did mount.');
  }

  render() {
    const { rows } = this.props;
    return (
      <table>
        <tbody>
          { rows.map(row => (
            <tr key={row.id}>
              <td>
                {row.name}
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    )
  }
}
