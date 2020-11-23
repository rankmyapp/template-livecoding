const { Schema, model,  } = require('mongoose');

const characterSchema = new Schema({
  id: String,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String
}, { timestamps: true });

module.exports = model('character', characterSchema);
