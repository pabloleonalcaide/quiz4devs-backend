import QuizFinder from '../../../../Contexts/Backoffice/quizs/application/QuizFinder';
import QuizSearcher from '../../../../Contexts/Backoffice/quizs/application/QuizSearcher';
import { container } from './index';

const registerTestServices = (): void => {
  container.register('backoffice.quiz_finder', QuizFinder);
  container.register('backoffice.quiz_searcher', QuizSearcher);
};

export default registerTestServices;
