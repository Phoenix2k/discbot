import { Discbot } from './main';

describe('Discbot class', () => {
  test('has the correct name', () => {
    const app = new Discbot('Testbot');
    expect(app.name).toEqual('Testbot');
  });
});
