const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    courriel: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
  const User = mongoose.model('User', userSchema);
  


module.exports = User;