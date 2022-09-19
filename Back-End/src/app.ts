import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import errorMiddleware from './middlewares/error.middleware';
import linkRoute from './routes/link.route';
import loginRoute from './routes/login.route';
import userRoute from './routes/user.route';
import swaggerFile from './swaggerFile.json';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(loginRoute);

    this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.app.use(userRoute);
    this.app.use(linkRoute);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
