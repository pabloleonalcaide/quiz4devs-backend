import request from 'supertest';

import server from '../../../src/server';
import { random } from '../../contexts/backoffice/Quiz/domain/QuizMother';

describe('Quiz - Get resource', () => {
  beforeAll(async () => {
    await server.close();
  });
  beforeEach(async () => {
    await server.close();
  });
  afterEach(async () => {
    await server.close();
  });

  it('should return a Quiz', async () => {
    const randomQuiz = random();

    const response = await request(server).get('/quiz');
    expect(response.status).toEqual(200);
    //    expect(response.body).toEqual(randomQuiz);
  });
});
