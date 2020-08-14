const _ = require('lodash');

module.exports = {
  people: (parent, args, { dataSources }, info) => {
    return dataSources.apartmentAPI.getPersonByApartment(parent, args)
  }
}
