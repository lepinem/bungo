const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
  brewery: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number }, //number from slider
  seasonal: { type: Boolean },
  whiteWhale: {type: Boolean },
  comments: { type: String },
  photo: {type: String}
});

const Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
