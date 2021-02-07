import { Quiz } from '../domain/Quiz';
import { Answer } from '../domain/Answer';

export default class QuizCreator {
  constructor() {}

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
