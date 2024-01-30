const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const budgetSchema = new Schema({
  budget_uid: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  budget_category: {
    type: String,
  },
  budget_name: {
    type: String,
    allowNull: false,
  },
  budget_created_date: {
    type: Date,
    default: Date.now,
    allowNull: false,
  },
  budget_amount: {
    type: Number,
    allowNull: false,
  },
  created_user_uid: {
    type: Number,
    allowNull: false,
  },
  is_active: {
    type: Boolean,
    allowNull: false,
  },
});

module.exports = mongoose.model('budget', budgetSchema);
