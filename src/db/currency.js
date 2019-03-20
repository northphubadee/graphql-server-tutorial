const mongoose = require('./connection')
const { Schema } = mongoose

var schema = Schema({
  currency_numeric_code: {
    type: String,
    required: true
  },
  currency_alphabetic_code: {
    type: String,
    required: true
  }
}, {
  versionKey: false
})

module.exports = mongoose.model('Currency', schema, 'ds_corp_currency_codes')