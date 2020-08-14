const _ = require('lodash');

module.exports = {
  apartments: (parent, args, { dataSources }, info) => {
    return dataSources.blockAPI.getApartmentsByBlockName(parent, args)
  }
}
