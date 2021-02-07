import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

class QuizFinder {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  find(id: string): Quiz[] {
    // call to repository
    return new Array<Quiz>();
  }
}

export default QuizFinder;
