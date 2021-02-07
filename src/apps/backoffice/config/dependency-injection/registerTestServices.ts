import InMemoryQuizRepository from '../../../../contexts/backoffice/Quiz/infrastructure/InMemoryQuizRepository';
import { container } from './index';

const registerTestServices = (): void => {
  container.register('backoffice.quiz_repository', InMemoryQuizRepository);
};

export default registerTestServices;
