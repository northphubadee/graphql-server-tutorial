const { GraphQLID, GraphQLNonNull } = require('graphql')
const PayinType = require('../types/payin')
const getProjection = require('../utils/projection')

module.exports = {
  type: PayinType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, { db: { Payin } }, fieldASTs) => {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs)

      Payin.findById(id)
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(errors => reject(errors))
    })
  }
}
