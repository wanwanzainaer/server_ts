import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not Permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    //req.session
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in </div>
          <a href="/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(
        `
        <div>
          <div>You are not logged in </div>
          <a href="/login">Login</a>
        </div>
      `
      );
    }
  }
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(
      'You have the Permmit,Welcome to protected routes, logged in user'
    );
  }
}
