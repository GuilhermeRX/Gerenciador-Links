import IUser from "../../interfaces/IUser";

export const mockUser: IUser = {
  id: 2,
  name: 'any_name',
  email: 'anyemail@test.com',
  password: '123456',
}

export const mockUserCreate: IUser = {
  name: 'any_name',
  email: 'anyemail@test.com',
  password: '123456',
}
export const mockUserCreateInvalid: IUser = {
  name: 'any_name',
  email: 'anyemailtest.com',
  password: '123456',
}

export const mockUserArray: IUser[] = [
  {
    id: 2,
    name: 'any_name',
    email: 'anyemail@test.com',
    password: '123456',
  },
  {
    id: 3,
    name: 'any_name2',
    email: 'anyemail2@test.com',
    password: '123456',
  }
]
