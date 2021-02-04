import { Router } from 'express';
import container from '../config/dependency-injection';
import QuizController from '../controllers/quizController';

const router: Router = Router();
const controller: QuizController = container.get('app.quiz_controller');

router.get('/', controller.quiz_list);
router.get('/:id', controller.quiz_detail);

export default router;