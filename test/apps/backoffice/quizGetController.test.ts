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

  it('should return all Quizs', async () => {
    const response = await request(server).get('/quiz');
    expect(response.status).toEqual(200);
  });

  it('should return a Quiz', async () => {
    const randomQuiz = random();
    await request(server)
      .post('/quiz')
      .set('Accept', 'application/json')
      .send({
        id: randomQuiz.id,
        question: randomQuiz.question,
        answers: randomQuiz.answers,
        explanation: randomQuiz.explanation,
        category: randomQuiz.category,
      });

    const response = await request(server).get(`/quiz/${randomQuiz.id}`);

    expect(response.status).toEqual(200);
  });
});
