// a seeding function to populate database 
// run once

// require the model
// require the seed file

const Guitar = require('./model.js');
const guitarlist = require('./guitars.json')

Guitar.insertMany(guitarlist, function(error, success) {
  if (error) {
    console.log("This is your error!  ",error)
    return
  }
  console.log('success!')
  return
})