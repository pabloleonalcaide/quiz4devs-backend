import { Answer } from './answer.model';
export class Quiz {
  id: string;
  question: string;
  answers: Answer[];
  explanation: string;
  category: string;

  constructor(){
    this.id = '';
    this.question = '';
    this.answers = new Array<Answer>();
    this.explanation = '';
    this.category = ''
  }
}