// import chai, { expect } from 'chai';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import { app } from '../../app';
import User from '../../database/models/User';
import JwtService from '../../services/JwtService';
import { mockToken } from '../mocks/login';
import { mockUser, mockUserArray, mockUserCreate, mockUserCreateInvalid } from '../mocks/user';

chai.use(chaiHttp);

describe('Testa a rota de usuários', function () {

  beforeEach(function () {
    Sinon.restore();
    Sinon.stub(JwtService, 'sign').returns(mockToken);
    Sinon.stub(JwtService, 'validateToken').returns({});
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

  it('Requisição para atualizar um usuário.', async function () {
    Sinon.stub(User, 'update').resolves();
    const response = await chai.request(app)
      .put('/user/2')
      .send(mockUserCreate)
      .set('authorization', 'any_token');
    const user = response.body;
    expect(response.status).to.equal(200);
    expect(user.email).to.be.equal('anyemail@test.com');
    expect(user.id).to.be.equal(2);
  });

  it('Requisição para recuperar todos os usuários', async function () {
    Sinon.stub(User, 'findAll').resolves(mockUserArray as User[])
    const response = await chai.request(app)
      .get('/user')
      .set('authorization', 'any_token');
    const userArray = response.body;
    expect(response.status).to.equal(200);
    expect(userArray).to.be.deep.equal(mockUserArray);
  });

  it('Requisição para recuperar um usuário especifico', async function () {
    Sinon.restore()
    Sinon.stub(User, 'findByPk').resolves(mockUser as User)
    Sinon.stub(JwtService, 'validateToken').returns(mockUser);

    const response = await chai.request(app)
      .get('/user/info')
      .set('authorization', 'any_token');
    const user = response.body;
    expect(response.status).to.equal(200);
    expect(user).to.be.deep.equal(mockUser);
  });

  it('Requisição para recuperar um usuário que não existe', async function () {
    Sinon.restore()
    Sinon.stub(User, 'findByPk').resolves(undefined)
    Sinon.stub(JwtService, 'validateToken').returns(mockUser);

    const response = await chai.request(app)
      .get('/user/info')
      .set('authorization', 'any_token');
    const { error } = response.body;
    expect(response.status).to.equal(404);
    expect(error).to.be.equal('Object not found');
  });

  it('Requisição para deletar um usuário', async function () {
    Sinon.stub(User, 'destroy').resolves()
    const response = await chai.request(app)
      .delete('/user/2')
      .set('authorization', 'any_token');
    expect(response.status).to.equal(204);
  });

  it('Requisição para deletar um usuário informando um id inválido', async function () {
    Sinon.stub(User, 'destroy').resolves()
    const response = await chai.request(app)
      .delete('/user/a')
      .set('authorization', 'any_token');
    const { error } = response.body
    expect(response.status).to.equal(400);
    expect(error).to.be.equal('"value" must be a number')
  });

});