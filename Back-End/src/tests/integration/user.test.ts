import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import { app } from '../../app';
import User from '../../database/models/User';
import JwtService from '../../services/JwtService';
import { mockToken } from '../mocks/login';
import { mockUser, mockUserCreate, mockUserCreateInvalid } from '../mocks/user';

chai.use(chaiHttp);

describe('Testa a rota de usuários', function () {

  beforeEach(function () {
    Sinon.restore();
    Sinon.stub(JwtService, 'sign').returns(mockToken);
  });

  it('Requisição para criar um novo usuário', async function () {
    Sinon.stub(User, 'findOrCreate').resolves([mockUser as User, true])
    const response = await chai.request(app)
      .post('/user')
      .send(mockUserCreate);
    const { token } = response.body;
    expect(response.status).to.equal(201);
    expect(token).to.equal(mockToken);
  });

  it('Requisição para criar usuário com email já existente', async function () {
    Sinon.stub(User, 'findOrCreate').resolves([mockUser as User, false])
    const response = await chai.request(app)
      .post('/user')
      .send(mockUserCreate);
    const { error } = response.body;
    expect(response.status).to.equal(400);
    expect(error).to.equal('User already exists');
  });

  it('Requisição para criar usuário com body inválido', async function () {
    const response = await chai.request(app)
      .post('/user')
      .send(mockUserCreateInvalid);
    const { error } = response.body;
    expect(response.status).to.equal(400);
    expect(error).to.equal('"email" must be a valid email');
  });

});