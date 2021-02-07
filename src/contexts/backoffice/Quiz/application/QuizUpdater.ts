import { Answer } from '../domain/Answer';
import { Quiz } from '../domain/Quiz';

export default class QuizUpdater {
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
