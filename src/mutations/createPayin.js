const { GraphQLNonNull } = require('graphql')
const PayinType = require('../types/payin')
const PayinInputType = require('../types/input/payin')
const socket = require('../socket')

module.exports = {
  type: PayinType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(PayinInputType)
    }
  },
  resolve: (root, { data }, { db: { Event } }) => {
    return new Promise((resolve, reject) => {
      const newEvent = new Event(data)

      newEvent
        .save()
        .then(data => {
          socket.publish('PAYIN_CREATED', {
            payinCreated: data
          })

          resolve(data)
        })
        .catch(errors => reject(errors))
    })
  }
}
