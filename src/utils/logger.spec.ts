import { logger } from './logger';

describe('Logger', () => {
  beforeEach(() => {
    logger.mockTypes(() => jest.fn());
  });
  test('logs messages as expected', async () => {
    const firstMessage = 'Successful log entry';
    const secondMessage = 'Another log entry';

    logger.success(firstMessage);
    logger.success(secondMessage);

    const firstCall = (logger.success as jest.Mock).mock.calls[0][0];
    const secondCall = (logger.success as jest.Mock).mock.calls[1][0];

    expect(firstCall).toEqual(firstMessage);
    expect(secondCall).toEqual(secondMessage);
    expect(logger.success).toHaveBeenCalledTimes(2);
  });
});
