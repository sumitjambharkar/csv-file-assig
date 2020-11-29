const mongoose = require('mongoose');

const GameSchema = mongoose.Schema(
  {
    name:"string",
    price:"string",
    image:"string"

  }
);

const model = mongoose.model('Game',GameSchema);
module.exports = model ;