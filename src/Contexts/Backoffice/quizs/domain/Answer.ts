export class Answer {
  text: string;
  isValid: boolean;

  constructor(text: string, isValid: boolean){
    this.isValid = isValid;
    this.text = text;
  }
}