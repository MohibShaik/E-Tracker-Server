const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
  user_uid: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
  },
  mobileNumber: {
    type: String,
    allowNull: false,
  },
  password: {
    type: String,
  },

  is_active: {
    type: Boolean,
  },
});

module.exports = mongoose.model('user', userSchema);
