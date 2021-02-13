import { Quiz } from '../domain/Quiz';
import { Answer } from '../domain/Answer';
import QuizRepository from '../domain/QuizRepository';

export default class QuizCreator {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }

  public async create(
    id: string,
    question: string,
    answers: Answer[],
    explanation: string,
    category: string
  ): Promise<Quiz> {
    return await this.repository.save(
      new Quiz(id, question, answers, explanation, category)
      );
  }
}
