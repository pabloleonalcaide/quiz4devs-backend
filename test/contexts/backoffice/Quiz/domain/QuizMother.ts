import { v4 as uuidv4 } from 'uuid';

import { Quiz } from '../../../../../src/contexts/backoffice/Quiz/domain/Quiz';
import { Answer } from '../../../../../src/Contexts/Backoffice/Quiz/domain/Answer';

export const random = (): Quiz => {
  return new Quiz(
    uuidv4(),
    'someQuestion',
    new Array<Answer>(),
    'some explanation',
    'some category'
  );
};
