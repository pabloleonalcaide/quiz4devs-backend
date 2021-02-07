import { Router } from 'express';
import container from '../config/dependency-injection';
import QuizGetController from '../controllers/quizGetController';
import QuizPostController from '../controllers/quizPostController';
import QuizPutController from '../controllers/quizPutController';

const router: Router = Router();
const getController: QuizGetController = container.get(
  'app.quiz_get_controller'
);
const postController: QuizPostController = container.get(
  'app.quiz_post_controller'
);
const putController: QuizPutController = container.get(
  'app.quiz_put_controller'
);

router.get('/', getController.quiz_list);
router.get('/:id', getController.quiz_detail);
router.post('/', postController.create);
router.put('/:id', putController.update);
export default router;
