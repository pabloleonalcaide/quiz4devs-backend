import { Quiz } from '../domain/Quiz';
import { Answer } from '../domain/Answer';
import QuizRepository from '../domain/QuizRepository';

export default class QuizCreator {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }

  public create(
    id: string,
    question: string,
    answers: Answer[],
    explanation: string,
    category: string
  ): Quiz {
    return new Quiz(id, question, answers, explanation, category);
  }
}
