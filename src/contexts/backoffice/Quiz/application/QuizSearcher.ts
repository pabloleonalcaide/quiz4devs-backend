import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

class QuizSearcher {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  async searchAll(): Promise<Quiz[]> {
    return await this.repository.search();
  }
}

export default QuizSearcher;
