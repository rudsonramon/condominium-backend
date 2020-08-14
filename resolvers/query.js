module.exports = {
  blocks: (parent, args, { dataSources }, info) => {
    return dataSources.blockAPI.getBlocks(args);
  },
  apartments: (parent, args, { dataSources }, info) => {
    return dataSources.apartmentAPI.getApartments(args);
  },
  people: (parent, args, { dataSources }, info) => {
    return dataSources.peopleAPI.getPeople(parent, args)
  }
}
