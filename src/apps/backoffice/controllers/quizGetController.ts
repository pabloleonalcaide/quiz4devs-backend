import {Request, Response} from 'express';

import {container} from '../config/dependency-injection';
import QuizFinder from '../../../contexts/backoffice/Quiz/application/QuizFinder';
import QuizSearcher from '../../../contexts/backoffice/Quiz/application/QuizSearcher';

class QuizGetController {
  quiz_list(req: Request, res: Response): Response {
    const searcher: QuizSearcher = new QuizSearcher(
      container.get('backoffice.quiz_repository')
    );
    return res.status(200).json(searcher.searchAll());
  }

  quiz_detail(req: Request, res: Response): Response {
    const finder: QuizFinder = new QuizFinder(
      container.get('backoffice.quiz_repository')
    );
    return res.status(200).json(finder.find(req.params.id));
  }
}

export default QuizGetController;
