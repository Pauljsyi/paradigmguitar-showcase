const mongoose = require('mongoose');
const database = require('./index.js')

const GuitarSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  img: {
    type: String
  }
})

module.exports = Guitar = mongoose.model('guitar', GuitarSchema)