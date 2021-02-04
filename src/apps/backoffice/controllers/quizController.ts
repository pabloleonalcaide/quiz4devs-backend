import { Request, Response } from 'express';

import container from '../config/dependency-injection';
import QuizFinder from '../../../Contexts/Backoffice/quizs/application/QuizFinder';
import QuizSearcher from '../../../Contexts/Backoffice/quizs/application/QuizSearcher';

class QuizController {

  quiz_list (req: Request, res: Response): Response{
    const searcher: QuizSearcher = container.get('backoffice.quiz_searcher');
    const response = res.status(200).json(searcher.searchAll());
    return response;
  }

  quiz_detail (req: Request, res: Response) {
    const finder: QuizFinder = container.get('backoffice.quiz_finder');
    return res.status(200).json(finder.find(req.params.id));
  }
}

export default QuizController;