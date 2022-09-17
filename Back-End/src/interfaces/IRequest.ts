import { Request } from 'express';

export default interface IRequest extends Request {
  user: {
    email: string,
    id: number,
  }
}