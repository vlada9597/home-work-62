import express from 'express';
import logRequests from './middlewares/logger.js';
import basicAuth from './middlewares/auth.js';
import validateUserInput from './middlewares/validateUser.js';
import checkArticleAccess from './middlewares/accessControl.js';
import errorHandler from './middlewares/errorHandler.js';

// Маршрути
import homeRoutes from './routes/index.js';
import userRoutes from './routes/users.js';
import articleRoutes from './routes/articles.js';

const app = express();
app.use(express.json());

// Мідлвар логування
app.use(logRequests);

// Головний маршрут
app.use('/', homeRoutes);

// Користувачі
app.use('/users', basicAuth, validateUserInput, userRoutes);

// Статті
app.use('/articles', basicAuth, checkArticleAccess, articleRoutes);

// Мідлвар обробки помилок
app.use(errorHandler);

export default app;
