'use strict';

module.exports = (app, db) => {

  app.get('/resources', (req, res) => {
    db.resources.findAll()
      .then(resources => {
        res.json(resources);
      });
  });

  app.get('/resource/:id', (req, res) => {
    const id = req.params.id;
    db.resources.findOne({
      where: { id: id }
    })
    .then(resource => {
      res.json(resource);
    })
  });

  app.post('/resource', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    db.resources.create({
      name: name,
      description: description
    })
    .then(newOwner => {
      res.json(`${newOwner} Created Succesfully`);
    })
    .catch(resource => {
      res.json(resource);
    });
  });

  // PATCH single resource
  app.patch('/resource/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.resources.find({
      where: { id: id }
    })
    .then(resource => {
      resource.updateAttributes(updates)
      res.json(resource);
    })
  });

  app.delete('/resource/:id', (req, res) => {
    const id = req.params.id;
    db.resources.destroy({
      where: { id: id }
    })
    .then(deletedOwner => {
      res.json(deletedOwner);
    });
  });
};
