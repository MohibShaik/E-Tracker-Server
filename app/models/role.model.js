const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roleSchema = new Schema({
  role_uid: {
    type: Number,
    primaryKey: true,
  },
  role_name: {
    type: String,
  },
});

module.exports = mongoose.model('role', roleSchema);

