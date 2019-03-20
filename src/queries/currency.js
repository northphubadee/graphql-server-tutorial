const { GraphQLString, GraphQLNonNull } = require('graphql')
const CurrencyType = require('../types/currency')
const getProjection = require('../utils/projection')

module.exports = {
  type: CurrencyType,
  args: {
    currency_numeric_code: {
      name: 'currency_numeric_code',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, { currency_numeric_code }, { db: { Currency } }, fieldASTs) => {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs)

      Currency.findOne({ currency_numeric_code: currency_numeric_code })
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(errors => reject(errors))
    })
  }
}
