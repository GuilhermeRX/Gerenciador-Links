import 'dotenv/config';
import App from './app';

const PORT = process.env.APP_PORT as string;

new App().start(PORT);