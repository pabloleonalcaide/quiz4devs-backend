import { Quiz } from './Quiz';
interface QuizRepository {
  delete(id: string): Promise<void>;
  find(id: string): Promise<Quiz>;
  save(quiz: Quiz): Promise<Quiz>;
  search(): Promise<Quiz[]>;
  update(quiz: Quiz): Promise<Quiz>;
}

export default QuizRepository;
