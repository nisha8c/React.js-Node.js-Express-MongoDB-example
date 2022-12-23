const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // validate request
  if(!req.body.title) {
    res.status(400).send({message: 'Content can not be empty.'});
    return;
  }

  // create a new tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // save tutorial in database
  tutorial
    .save(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while creating new Tutorial.'
        });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

  Tutorial.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Error while retrieving tutorials.'
        });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findById(id)
    .then(data => {
        if (!data) {
            res.status(404).send({ message: 'Not Found Tutorial with ID: ' + id });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: err.message || 'Error while retrieving tutorial with ID: ' + id });
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
        message: 'Data to update can not be empty.'
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Tutorial with id ${id}. May be Tutorial was not found.`
            });
        } else res.send({ message: 'Tutorial updated successfully.' });
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating tutorial with id ${id}`
        });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete tutorial id ${id}. Or Tutorial not found.`
            });
        } else {
            res.send({
                message: 'Tutorial was deleted successfully.'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete tutorial with id ${id}.`
        });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Tutorials were deleted successfully.`
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while deleting all tutorials.'
        });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Error occurred while retrieving tutorials.'
        });
    });
};