import * as React from 'react';
import { IPerson } from '../types/IPerson';
import Person from './Person';

export default ({ persons }: { persons: IPerson[] }) => (
  <ul>
    {persons.map((p: IPerson) => (<Person person={p} /> ))}
  </ul>
);
