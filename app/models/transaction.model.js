const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transaction_uid: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  transaction_type: {
    type: String,
  },
  payeeName: {
    type: String,
  },
  transaction_created_date: {
    type: Date,
    default: Date.now,
  },
  transaction_amount: {
    type: Number,
  },
  transaction_category: {
    type: String,
  },
  user_uid: {
    type: Number,
    allowNull: false,
  },
  budget_uid: {
    type: Number,
    allowNull: false,
  },
  is_active: {
    type: Boolean,
    allowNull: false,
  },
});

module.exports = mongoose.model(
  'transaction',
  transactionSchema
);
