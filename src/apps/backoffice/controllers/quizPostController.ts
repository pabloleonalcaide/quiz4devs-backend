import { Request, Response } from 'express';

import { container } from '../config/dependency-injection/index';
import QuizCreator from '../../../contexts/backoffice/Quiz/application/QuizCreator';
import GenericError from '../../../contexts/Shared/domain/GenericError';

class QuizPostController {
  private creator: QuizCreator;

  constructor() {
    this.creator = new QuizCreator(container.get('backoffice.quiz_repository'));
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { id, question, answers, explanation, category } = req.body;
    try {
      const response = await this.creator.create(
        id,
        question,
        answers,
        explanation,
        category
      );
      return res.status(201).json(response);
    } catch (error) {
      const status =
        error instanceof GenericError ? this.parseError(error.code) : 400;
      return res.status(status).json({ message: error.message });
    }
  };

  private parseError = (errorCode: string): number => {
    // TODO: Mapping Domain Error Code to Http Status Code
    return 400;
  };
}

export default QuizPostController;
