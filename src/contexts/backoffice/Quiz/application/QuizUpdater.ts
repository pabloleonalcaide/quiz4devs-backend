import { Answer } from '../domain/Answer';
import { Quiz } from '../domain/Quiz';
import QuizRepository from '../domain/QuizRepository';

export default class QuizUpdater {
  private repository: QuizRepository;

  constructor(repository: QuizRepository) {
    this.repository = repository;
  }
  public async update(
    id: string,
    question: string,
    answers: Answer[],
    explanation: string,
    category: string
  ): Promise<Quiz> {
    return await this.repository.update(
      new Quiz(id,question,answers,explanation,category)
      );
  }
}
