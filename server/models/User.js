const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  
  address: {
    type: String,
  },

  city: {
    type: String,
  },

  state: {
    type: String,
  },

  zip: {
    type: Number,
  },

  created: {
    type: Date,
    default: Date.now
  },

  update: Date
});

module.exports = mongoose.model('User', UserSchema)