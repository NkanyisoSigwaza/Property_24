const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create property Schema
const PropertySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  address: {
    type: String,
    required: [true, 'Adress field is required'],
  },
  price: {
    type: String,
    required: [true, 'Price field is required'],
  },
  agent: {
    type: String,
    required: [true, 'Agent field is required'],
  },
  //   img: {
  //     data: Buffer,
  //     contentType: String, //buffer allows you to store images as data in the form of arrays
  //   },

  // picture
  // area square meters
});

const Property = mongoose.model('property', PropertySchema); // our model to be structured on ninja Schema

module.exports = Property;
