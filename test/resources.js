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
                resource.destroy()
                        .then(deletedOwner => {
                          done();
                        });
              })
              done();
            });
  });

  describe('/GET resources', () => {
      it('it should GET all the resources', (done) => {
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
      it('it should GET all the resources', (done) => {
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
});
