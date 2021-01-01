import express from 'express';

import environment from './environment';
import quizRoutes from './apps/backoffice/routes/quiz';


const app = express();

// Config
app.set('port', process.env.PORT || environment.port);

// Middleware
app.use(express.json());  // Json requests

// Controllers
app.use('/quiz', quizRoutes);

// Init Application
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
})