import { Request, Response } from 'express';
import { get, controller } from './decorators/index';

@controller('/logout')
class LoginController {
  @get('/')
  getLogout(req: Request, res: Response) {
    req.session = null;

    res.redirect('/');
  }
}
