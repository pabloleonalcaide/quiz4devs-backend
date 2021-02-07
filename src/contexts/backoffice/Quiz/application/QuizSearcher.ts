import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

class QuizSearcher {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  searchAll(): Quiz[] {
    // call to repository
    return new Array<Quiz>();
  }
}

export default QuizSearcher;
