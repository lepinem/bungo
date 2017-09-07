//dal.js
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/bungodb';
const Beer = require('./models/Beer');

mongoose.connect(url, {useMongoClient: true});


//returns all beers
function getAllBeers(){
  return Beer.find()
}

//returns all beers from selected brewery
function getBeersByBrewery(brewery){
  return Beer.find({'brewery': brewery}).catch(function(err){
    console.log(err)
  })
}

//returns all beers of a selected type (ale, stout, )
function getBeersByType(type){
  return Beer.find({'type': type}).catch(function(err){
    console.log(err)
  })
}

//returns all beers above a selected rating
function getBeersByRating(rating){
  return Beer.find({'rating': {$gt: rating}}).catch(function(err){
    console.log(err)
  })
}

//returns a selected beer by id
function getBeerById(beerId) {
  return Beer.findOne({'_id': beerId}).catch(function(err){
    console.log(err)
  })
}

//adds a new beer
function addNewBeer(brewery, name, type, rating, seasonal, whiteWhale, comments, photo){
  Beer.create({brewery: brewery, name:name, type:type, rating: rating, seasonal: seasonal, whiteWhale: whiteWhale, comments: comments, photo: photo}, function (err, Beer){
    if (err) return handleError(err)
  })
}

// function addNewBeer(newBeer){
//   const beer = new Beer(newBeer)
//   beer.save(function(err){
//     console.log(err)
//   })
//   return Promise.resolve('success')
// }


module.exports = {
  getAllBeers, getBeersByBrewery, getBeersByType, getBeersByRating, getBeerById, addNewBeer
}
