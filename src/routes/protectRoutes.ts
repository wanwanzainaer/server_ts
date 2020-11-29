import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not Permitted');
}

router.get('/', requireAuth, (req: Request, res: Response) => {
  res.send('You have the Permmit,Welcome to protected routes, logged in user');
});

export { router };
