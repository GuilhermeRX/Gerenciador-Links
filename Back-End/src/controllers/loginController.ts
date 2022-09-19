import { NextFunction, Request, Response } from 'express';
import JwtService from '../services/JwtService';
import LoginService from '../services/LoginService';
import validationLogin from '../utils/validateLogin';

export default class LoginController {
  jwtService = JwtService;
  constructor(private service: LoginService) { }
  public async authenticator(req: Request, res: Response) {
    validationLogin(req.body);
    const token = await this.service.authenticator(req.body);
    res.status(200).json({ token });
  }

  public async validationAuthenticator(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new Error('TokenNotFound');

    await this.jwtService.validateToken(authorization);
    next();
  }
}