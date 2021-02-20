import Discbot from '.';

describe('Main app', () => {
  test('initializes correctly', () => {
    expect(Discbot.name).toEqual('Discbot');
  });
});
