const Guitars = require('./model.js');

const helpers = {
  getOne: (guitar) => {
    // console.log(guitar)
    return Guitars.findOne(guitar)
  },
  getAll: (guitarlist) => {
    return Guitars.find(guitarlist)
  },
  post: () => {

  }
}

module.exports = helpers