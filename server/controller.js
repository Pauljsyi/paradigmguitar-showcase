const helpers = require('../server/db/dbhelpers.js');

const controller = {
  getAll: (req, res) => {
    //get all request 

    helpers.getAll(req.params)
      .then((result) => {
        console.log('controller: got results')
        res.send(result);
        // console.log("result from get All", result)
      })
      .catch((error) => {
        console.log("controller: rejected: ", error)
        res.send(error)
      })
  },
  getOne: (req, res) => {
    //get one request
    helpers.getOne(req.params)
    .then((result) => {
      console.log("controller: got one result")
      res.send(result)
      
    })
    .catch((error) => {
      console.log("controller: rejected: ", error)
      res.send(error)
    })
  },
  post: (req, res) => {
    // for credit card information for cart?
    // adding guitar data to database for the first time

  }
}

module.exports = controller;