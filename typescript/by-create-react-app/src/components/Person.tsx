import * as React from 'react';
import {IPerson} from '../types/IPerson';

interface IProps {
  person: IPerson
};

export default class Person extends React.Component<IProps, {}> {
  public render() {
    const { person: { firstName, lastName } } = this.props;
    return (
      <li>{firstName} {lastName}</li>
    );
  }
}
