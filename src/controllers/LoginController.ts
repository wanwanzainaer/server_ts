import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators/index';

@controller('/login')
class LoginController {
  @get('/')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
  }

  @post('/')
  @bodyValidator('email', 'password')
  postLodin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      //mark this person as logged in
      req.session = { loggedIn: true };
      //redirect them to the root route
      res.redirect('/');
    } else {
      res.status(422).send('Invaid email or password');
    }
  }
}
