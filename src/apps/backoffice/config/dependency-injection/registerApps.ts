import QuizController from '../../controllers/quizController';
import { container } from './index';

// Controllers
export function registerApps(): void {
  container.register('app.quiz_controller', QuizController);
}
