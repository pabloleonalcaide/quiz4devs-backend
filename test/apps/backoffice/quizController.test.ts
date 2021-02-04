import request from 'supertest';

import server from '../../../src/server';

describe('Quiz - Get resource', () => {
  afterEach(() => {
    server.close();
  });
  beforeEach(() => {
    server.close();
  });

  it('should return a success response', async () => {
    const response = await request(server).get('/quiz');
    expect(response.status).toEqual(200);
  });
});
