import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import LoginController from './controllers/loginController';
import errorMiddleware from './middlewares/error.middleware';
import linkRoute from './routes/link.route';
import loginRoute from './routes/login.route';
import userRoute from './routes/user.route';
import LoginService from './services/LoginService';

export default class App {
  public app: express.Express;
  public loginService = new LoginService();
  public loginController = new LoginController(this.loginService);

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use('/login', loginRoute);
    this.app.use((req, res, next) => this.loginController.validationAuthenticator(req, res, next));

    this.app.use('/user', userRoute);
    this.app.use('/link', linkRoute);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
