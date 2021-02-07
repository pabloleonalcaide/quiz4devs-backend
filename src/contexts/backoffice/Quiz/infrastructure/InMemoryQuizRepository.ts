import QuizRepository from '../domain/QuizRepository';
import { Quiz } from '../domain/Quiz';

export default class InMemoryQuizRepository implements QuizRepository {
  async delete(id: string): Promise<void> {
    return await null;
  }

  async find(id: string): Promise<Quiz> {
    return await null;
  }

  async save(quiz: Quiz): Promise<void> {
    return await null;
  }

  async search(): Promise<Quiz[]> {
    return await null;
  }
}
