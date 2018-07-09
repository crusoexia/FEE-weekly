import { each } from 'lodash';
import * as faker from 'faker';

interface Soldier {
  firstName: string,
  lastName: string,
  greeting: () => string
}

class Knight implements Soldier {
  fullName: string;
  
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }

  greeting(): string {
    return `Heya! This is knight ${this.fullName}!`;
  }
}

const petty = new Knight(faker.name.firstName(), faker.name.lastName());
each([ petty ], p => console.log(p.greeting()));
