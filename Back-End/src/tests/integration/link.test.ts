// import chai, { expect } from 'chai';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import { app } from '../../app';
import Link from '../../database/models/Link';
import User from '../../database/models/User';
import JwtService from '../../services/JwtService';
import { mockLink, mockLinkArray, mockLinkCreate } from '../mocks/link';
import { mockToken } from '../mocks/login';
import { mockUser } from '../mocks/user';
chai.use(chaiHttp);

describe('Testa a rota de links', function () {

  beforeEach(function () {
    Sinon.restore();
    Sinon.stub(JwtService, 'sign').returns(mockToken);
    Sinon.stub(JwtService, 'validateToken').returns({});
  });

  it('Requisição para criar um novo link', async function () {
    Sinon.stub(User, 'findByPk').resolves(mockUser as User)
    Sinon.stub(Link, 'findOrCreate').resolves([mockLink as Link, true])
    const response = await chai.request(app)
      .post('/link')
      .send(mockLinkCreate)
      .set('authorization', 'any_token');
    const link = response.body;
    expect(response.status).to.equal(201);
    expect(link).to.be.deep.equal(mockLink);
  });

  it('Requisição para retornar uma lista com todos os links do usuário em questão.', async function () {
    Sinon.restore();
    Sinon.stub(JwtService, 'validateToken').returns(mockUser);
    Sinon.stub(Link, 'findAll').resolves(mockLinkArray as Link[])
    const response = await chai.request(app)
      .get('/link')
      .set('authorization', 'any_token');
    const links = response.body;
    expect(response.status).to.equal(200);
    expect(links).to.be.deep.equal(mockLinkArray);
  });

  it('Requisição para retornar um link especifico', async function () {
    Sinon.stub(Link, 'findByPk').resolves(mockLink as Link)
    const response = await chai.request(app)
      .get('/link/1')
      .set('authorization', 'any_token');
    const link = response.body;
    expect(response.status).to.equal(200);
    expect(link).to.be.deep.equal(mockLink);
  });

  it('Requisição para atualizar um link', async function () {
    Sinon.stub(Link, 'update').resolves()
    const response = await chai.request(app)
      .put('/link/1')
      .send(mockLinkCreate)
      .set('authorization', 'any_token');
    const link = response.body;
    expect(response.status).to.equal(200);
    expect(link).to.be.deep.equal(mockLink);
  });

  it('Requisição para deletar um link', async function () {
    Sinon.stub(Link, 'destroy').resolves()
    const response = await chai.request(app)
      .delete('/link/1')
      .set('authorization', 'any_token');
    const link = response.body;
    expect(response.status).to.equal(201);
  });
});