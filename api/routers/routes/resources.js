'use strict';

module.exports = (app, db) => {
  const Resource = db.resources;

  app.get('/resources', (req, res) => {
    Resource.findAll()
      .then(resources => {
        res.json(resources);
      });
  });

  app.get('/resource/:id', (req, res) => {
    const id = req.params.id;
    Resource.findOne({
      where: { id: id }
    })
    .then(resource => {
      res.json(resource);
    })
  });

  app.post('/resource', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    Resource.create({
      name: name,
      description: description
    })
    .then(newResource => {
      res.json(`${newResource} Created Succesfully`);
    })
    .catch(resource => {
      res.json(resource);
    });
  });

  app.patch('/resource/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    Resource.find({
      where: { id: id }
    })
    .then(resource => {
      resource.updateAttributes(updates)
      res.json(resource);
    })
  });

  app.delete('/resource/:id', (req, res) => {
    const id = req.params.id;
    Resource.destroy({
      where: { id: id }
    })
    .then(deletedOwner => {
      res.json(deletedOwner);
    });
  });
};
