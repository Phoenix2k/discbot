import { Name } from './types';

export class Discbot {
  public name: Name;
  constructor(name: string) {
    this.name = name;
  }

  init(): void {
    console.log(this.name, 'initialized.');
    return;
  }
}
