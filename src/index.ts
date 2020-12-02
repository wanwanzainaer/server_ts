import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/LogoutController';
import './controllers/RootController';
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfzxcv'] }));

app.use('/', AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
