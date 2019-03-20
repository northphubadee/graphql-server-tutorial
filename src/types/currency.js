const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
  } = require('graphql')
  
module.exports = new GraphQLObjectType({
    name: 'Currency',
    fields: () => ({
      id: {
        type: GraphQLID
      },
      currency_numeric_code: {
        type: new GraphQLNonNull(GraphQLString)
      },
      currency_alphabetic_code: {
        type: GraphQLString
      }
    })
})  