const { ApolloServer, gql, ApolloError } = require('apollo-server');
const BlockAPI = require('./datasources/block');
const ApartmentAPI = require('./datasources/apartment');
const PeopleAPI = require('./datasources/person');
const typeDefs = require('./src/schema.js');
const resolvers = require('./resolvers.js');
//const apartments = require('./data/apartments.json');
//const people = require('./data/people.json');

const dataSources = () => ({
  blockAPI: new BlockAPI(),
  apartmentAPI: new ApartmentAPI(),
  peopleAPI: new PeopleAPI(),
})

/** 
// Resolver map
const resolvers = {
  Query: {
    blocks() {

      // Return our hardcoded array of blocks
      return blocks;
    }
  },
  Block: {
    apartments(parent) {

      // Filter the hardcoded array of blocks to only include the respective apartment in the blockName
      return apartments.filter(apartment => apartment.blockName === parent.blockName);
    }
  },
  Apartment: {

    // filter all the people that live at the same apartment
    people(parent) {
      return people.filter(person => person.apartmentId === parent.apartmentId);
    }
  }
};
*/

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  //  debug: false,
  //  engine: {
  //    graphVariant: "current"
  //  }
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`graphQL running at ${url}`)
  })