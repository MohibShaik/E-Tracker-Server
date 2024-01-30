const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    allowNull: false,
    require: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  is_active: {
    type: Boolean,
    allowNull: false,
  },
});

module.exports = mongoose.model('category', categorySchema);
