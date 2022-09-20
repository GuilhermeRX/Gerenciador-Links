import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import { app } from '../../app';
import User from '../../database/models/User';
import JwtService from '../../services/JwtService';
import { mockLogin, mockLoginInvalid, mockToken, mockUserLogin } from '../mocks/login';

chai.use(chaiHttp);

describe('Testa a rota de login', function () {

  beforeEach(function () {
    Sinon.restore();
    Sinon.stub(JwtService, 'sign').returns(mockToken);
  });

  it('Requisição com dados válidos', async function () {
    Sinon.stub(User, 'findOne').resolves(mockUserLogin as User)
    const response = await chai.request(app)
      .post('/login')
      .send(mockLogin);
    const { token } = response.body;
    expect(response.status).to.equal(200);
    expect(token).to.equal(mockToken);
  });

  it('Requisição com campos fora da validação', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send(mockLoginInvalid);
    const { error } = response.body;
    expect(response.status).to.equal(400);
    expect(error).to.equal('"email" must be a valid email');
  });

  it('Requisição com email inexistente', async function () {
    Sinon.stub(User, 'findOne').resolves(undefined)
    const response = await chai.request(app)
      .post('/login')
      .send(mockLogin);
    const { error } = response.body;
    expect(response.status).to.equal(404);
    expect(error).to.equal('Object not found');
  });

});