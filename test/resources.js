process.env.NODE_ENV = 'test';
const path = require('path');

const chai = require('chai'),
      chaiHttp = require('chai-http'),
      app = require(path.join('..', 'api', 'index.js')),
      should = chai.should(),
      db = require(path.join('..', 'api', 'models')),
      Resource = db.resources;

chai.use(chaiHttp);

describe('Resources', () => {
  beforeEach((done) => {
    Resource.findAll()
            .then(resources => {
              resources.map(resource => {
                resource.destroy();
              })
              done();
            });
  });

  describe('/GET resources', () => {
      it('returns all the resources', (done) => {
        chai.request(app)
            .get('/resources')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  describe('/GET resource/:id', () => {
    const modelID = 1000;

    it('returns resource with :id', (done) => {
      Resource.create({
        id: modelID,
        name: 'TESTE',
        description: 'DESCRICAO'
      })

      chai.request(app)
          .get(`/resource/${modelID}`)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.name.should.be.eq('TESTE');
            done();
          });
    });
  });

  it('creates a resource ', (done) => {
    let resource = {
        name: "NAME",
        description: "DSK"
    }
    chai.request(app)
    .post('/resource')
    .send(resource)
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('description');
      done();
    });
  });
});
