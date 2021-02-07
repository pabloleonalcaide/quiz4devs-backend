import QuizGetController from '../../controllers/quizGetController';
import QuizPutController from '../../controllers/quizPutController';
import QuizPostController from '../../controllers/quizPostController';
import { container } from './index';

// Controllers
const registerApps = (): void => {
  container.register('app.quiz_get_controller', QuizGetController);
  container.register('app.quiz_put_controller', QuizPutController);
  container.register('app.quiz_post_controller', QuizPostController);
};

export default registerApps;
