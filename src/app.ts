import cors from 'cors';
import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import linkRoute from './routes/link.route';
import userRoute from './routes/user.route';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use('/user', userRoute);
    this.app.use('/link', linkRoute);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
