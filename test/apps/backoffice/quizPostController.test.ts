import request from 'supertest';

import server from '../../../src/server';
import { random } from '../../contexts/backoffice/Quiz/domain/QuizMother';

describe('Quiz - Create a Quiz', () => {
  beforeEach(async () => {
    await server.close();
  });
  afterEach(async () => {
    await server.close();
  });

  it('should create a new Quiz', async () => {
    const randomQuiz = random();
    const response = await request(server)
      .post('/quiz')
      .set('Accept', 'application/json')
      .send({
        id: randomQuiz.id,
        question: randomQuiz.question,
        answers: randomQuiz.answers,
        explanation: randomQuiz.explanation,
        category: randomQuiz.category,
      });
    expect(response.status).toEqual(201);
  });
});
