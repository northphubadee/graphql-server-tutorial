const socket = require('../socket')
const PayinType = require('../types/payin')

module.exports = {
  type: PayinType,
  subscribe: () => socket.asyncIterator('PAYIN_CREATED')
}