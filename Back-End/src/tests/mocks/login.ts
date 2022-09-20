import ILogin from 'src/interfaces/ILogin';
import IUser from 'src/interfaces/IUser';

export const mockLogin: ILogin = {
  email: 'anyemail@test.com',
  password: '123456',
};

export const mockLoginInvalid: ILogin = {
  email: 'anyemailtest.com',
  password: '123456',
};

export const mockUserLogin: IUser = {
  id: 2,
  name: 'any_name',
  email: 'anyemail@test.com',
  password: '123456',
}

export const mockToken = 'anytoken';