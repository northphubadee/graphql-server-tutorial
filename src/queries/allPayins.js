const { GraphQLList, GraphQLInt } = require('graphql')
const PayinType = require('../types/payin')
const getProjection = require('../utils/projection')

module.exports = {
  type: new GraphQLList(PayinType),
  resolve: (root, { id }, { db: { Payin } }, fieldASTs) => {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs)

      Payin.find({})
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(errors => reject(errors))
    })
  }
}
