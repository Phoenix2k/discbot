import { Name } from './types';

export class Discbot {
  public name: Name;
  constructor(name: string) {
    this.name = name;
  }

  init() {
    console.log(this.name, 'initialized.');
  }
}
