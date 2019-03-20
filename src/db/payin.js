const mongoose = require('./connection')
const { Schema } = mongoose

var schema = new Schema({
  payeeProxyId: {
    type: String,
    required: true
  },
  payeeProxyType: {
    type: String,
    required: true
  },
  payeeAccountNumber: {
    type: String,
    required: true
  },
  payeeName: {
    type: String,
    required: true
  },
  payerProxyId: {
    type: String,
    required: true
  },
  payerProxyType: {
    type: String,
    required: true
  },
  payerAccountNumber: {
    type: String,
    required: true
  },
  payerName: {
    type: String,
    required: true
  },
  sendingBankCode: {
    type: String,
    required: true
  },
  receivingBankCode: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  transactionDateandTime: {
    type: String,
    required: true
  },
  billPaymentRef1: {
    type: String,
    required: true
  },
  billPaymentRef2: {
    type: String,
    required: true
  },
  currencyCode: {
    type: String,
    required: true
  },
  currencyIsoCode: {
    type: String,
    required: false
  },
  createdTimestamp: Date,
  corpID: {
    type: String,
    required: false
  },
  paymentType: {
    type: String,
    required: false
  },
  paymentMethod: {
    type: String,
    required: false
  },
  paymentMethod: {
    type: String,
    required: false
  },    
  updatedTimestamp: Date,
  status: {
    type: String,
    required: true
  },    
}, {
  versionKey: false
})

module.exports = mongoose.model('Payin', schema, 'ds_corp_payment')