import express from 'express';
import cookieSession from 'cookie-session';

import { router as loginRoutes } from './routes/loginRoutes';
import { router as rootRoutes } from './routes/rootRoutes';
import { router as logoutRoutes } from './routes/logoutRoutes';
import { router as protectedRoutes } from './routes/protectRoutes';

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfzxcv'] }));

app.use('/', rootRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/protected', protectedRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
