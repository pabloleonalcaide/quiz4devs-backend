import { Answer } from './Answer';
export class Quiz {
  id: string;
  question: string;
  answers: Answer[];
  explanation: string;
  category: string;

  constructor(
    id: string,
    question: string,
    answers: Answer[],
    explanation: string,
    category: string
  ) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.explanation = explanation;
    this.category = category;
  }
}
