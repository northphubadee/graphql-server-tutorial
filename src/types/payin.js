const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'PayIn',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    payeeProxyId: {
      type: GraphQLString
    },
    payeeProxyType: {
      type: GraphQLString
    },
    payeeAccountNumber: {
      type: GraphQLString
    },
    payeeName: {
      type: GraphQLString
    },
    payerProxyId: {
      type: GraphQLString
    },
    payerProxyType: {
      type: GraphQLString
    },
    payerAccountNumber: {
      type: GraphQLString
    },
    payerName: {
      type: GraphQLString
    },
    sendingBankCode: {
      type: GraphQLString
    },
    receivingBankCode: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLString
    },
    transactionId: {
      type: GraphQLString
    },
    transactionDateandTime: {
      type: GraphQLString
    },
    billPaymentRef1: {
      type: GraphQLString
    },
    billPaymentRef2: {
      type: GraphQLString
    },
    currencyCode: {
      type: GraphQLString
    },
    currencyIsoCode: {
      type: GraphQLString
    },
    createdTimestamp: {
      type: GraphQLString
    },
    corpID: {
      type: GraphQLString
    },
    paymentType: {
      type: GraphQLString
    },
    paymentMethod: {
      type: GraphQLString
    },
    client: {
      type: GraphQLString
    },
    updatedTimestamp: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    }
  })  
})