import QuizRepository from '../domain/QuizRepository';
import { Quiz } from '../domain/Quiz';

export default class InMemoryQuizRepository implements QuizRepository {

  private quizs: Quiz[];

  constructor() {
    this.quizs = new Array<Quiz>();
  }

  async delete(id: string): Promise<void> {
    this.quizs = this.quizs.filter(quiz => quiz.id !== id);
  }

  async find(id: string): Promise<Quiz> {
    return await this.quizs.find(quiz => quiz.id === id);
  }

  async save(quiz: Quiz): Promise<Quiz> {
    await this.quizs.push(quiz);
    return await quiz;
  }

  async search(): Promise<Quiz[]> {
    return await this.quizs;
  }

  async update(quiz: Quiz): Promise<Quiz>{
    await this.delete(quiz.id);
    return await this.save(quiz);
  }

}
