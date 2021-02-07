import { Answer } from '../domain/Answer';
import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

export default class QuizUpdater {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  public update(
    id: string,
    question: string,
    answers: Answer[],
    explanation: string,
    category: string
  ): Quiz {
    return null;
  }
}
