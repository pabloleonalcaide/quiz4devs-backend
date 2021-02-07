import InMemoryQuizRepository from '../../../../contexts/backoffice/Quiz/infrastructure/InMemoryQuizRepository';

import { container } from './index';

const registerProdServices = (): void => {
  container.register('backoffice.quiz_repository', InMemoryQuizRepository);
};

export default registerProdServices;
