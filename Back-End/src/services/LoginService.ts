import ILogin from '../interfaces/ILogin';
import JwtService from './JwtService';
import UserService from './UserService';

export default class LoginService {
  private userService = new UserService();

  public async authenticator(obj: ILogin): Promise<string> {
    const user = await this.userService.readOneEmail(obj);

    if (!user || user.password !== obj.password) {
      const error = new Error('Email or password invalid');
      error.name = 'ValidationError';
      throw error;
    }

    const token = JwtService.sign({ email: user.email, id: user.id });
    return token;
  }
}