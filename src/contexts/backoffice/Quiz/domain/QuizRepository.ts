import { Quiz } from './Quiz';
interface QuizRepository {
  delete(id: string): Promise<void>;
  find(id: string): Promise<Quiz>;
  save(quiz: Quiz): Promise<void>;
  search(): Promise<Quiz[]>;
}

export default QuizRepository;
