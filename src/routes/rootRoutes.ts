import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
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
});

export { router };
