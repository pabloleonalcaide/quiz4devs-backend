import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

class QuizFinder {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  async find(id: string): Promise<Quiz> {
    return await this.repository.find(id);
  }
}

export default QuizFinder;
