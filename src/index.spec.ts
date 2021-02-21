import Discbot from './index';

describe('Main app', () => {
  test('initializes correctly', async () => {
    expect(Discbot.name && Discbot.name.length).not.toEqual(0);
  });
});
