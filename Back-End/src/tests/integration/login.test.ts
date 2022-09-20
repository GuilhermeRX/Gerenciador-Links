import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import { app } from '../../app';
import User from '../../database/models/User';
import JwtService from '../../services/JwtService';
import { mockLogin, mockToken, mockUserLogin } from '../mocks/login';

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
});