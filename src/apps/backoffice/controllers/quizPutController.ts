import { Request, Response } from 'express';

import QuizUpdater from '../../../contexts/backoffice/Quiz/application/QuizUpdater';
import GenericError from '../../../contexts/Shared/domain/GenericError';

class QuizPutController {
  private updater: QuizUpdater;

  constructor() {
    this.updater = new QuizUpdater();
  }

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { id, question, answers, explanation, category } = req.body;
    try {
      const response = await this.updater.update(
        id,
        question,
        answers,
        explanation,
        category
      );
      return res.status(204).json(response);
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

export default QuizPutController;
