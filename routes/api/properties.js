const express = require('express');
const router = express.Router();

//const User = require('../../models/User');
const Property = require('../../models/Property');

// @route POST api/properties/add
// @desc add property
// @access Public
router.post('/add', (req, res) => {
  const propertyNew = new Property();
  propertyNew.name = req.body.name;
  propertyNew.address = req.body.address;
  propertyNew.price = req.body.price;
  propertyNew.agent = req.body.agent;
  //img

  propertyNew
    .save()
    .then(property => res.json(property))
    .catch(err => console.log(err));
});

// @route POST api/properties/update/:id
// @desc update property
// @access Public
router.post('/update/:id', (req, res) => {
  Property.findById(req.params.id, function(_err, property) {
    if (!property) {
      res.status(404).send('data is not found');
    } else {
      property.name = req.body.name;
      property.address = req.body.address;
      property.price = req.body.price;
      property.name = req.body.name;
      property
        .save()
        .then(_property => {
          res.json(_property);
        })
        .catch(err => console.log(err));
    }
  });
});

// @route DELETE api/properties/delete/:id
// @desc delete property
// @access Public
router.delete('/delete/:id', function(req, res) {
  Property.findByIdAndRemove({_id: req.params.id})
    .then(function(property) {
      res.json('Deleted');
    })
    .catch(err => console.log(err));
});

// @route POST api/properties/getAgents
// @desc gets properties for one Agent
// @access Public
router.post('/getAgents', function(req, res) {
  Property.find({agent: req.body.agent}).then(function(property) {
    res.json(property).catch(err => console.log(err));
  });
});

module.exports = router;
