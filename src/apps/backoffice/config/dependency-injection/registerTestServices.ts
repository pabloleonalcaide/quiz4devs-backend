import QuizUpdater from '../../../../contexts/backoffice/Quiz/application/QuizUpdater';
import QuizCreator from '../../../../contexts/backoffice/Quiz/application/QuizCreator';
import QuizFinder from '../../../../contexts/backoffice/Quiz/application/QuizFinder';
import QuizSearcher from '../../../../contexts/backoffice/Quiz/application/QuizSearcher';
import { container } from './index';

const registerTestServices = (): void => {
  container.register('backoffice.quiz_finder', QuizFinder);
  container.register('backoffice.quiz_searcher', QuizSearcher);
  container.register('backoffice.quiz_creator', QuizCreator);
  container.register('backoffice.quiz_updater', QuizUpdater);
};

export default registerTestServices;
