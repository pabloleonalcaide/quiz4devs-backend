import request from 'supertest';

import server from '../../../src/server';
import { random } from '../../contexts/backoffice/Quiz/domain/QuizMother';

describe('Quiz - Update resource', () => {
  beforeAll(async () => {
    await server.close();
  });
  beforeEach(async () => {
    await server.close();
  });
  afterEach(async () => {
    await server.close();
  });

  it('should update an existing Quiz', async () => {
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

    const response = await request(server)
      .put(`/quiz/${randomQuiz.id}`)
      .set('Accept', 'application/json')
      .send({
        id: randomQuiz.id,
        question: randomQuiz.question,
        answers: randomQuiz.answers,
        explanation: randomQuiz.explanation,
        category: 'A different category',
      });

    expect(response.status).toEqual(204);
  });
});
