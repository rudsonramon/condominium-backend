const { gql } = require('apollo-server');
// Schema definition
module.exports = gql`
# A Block has a blockName and Apartments
type Block {
    blockName: String!
    blockCode: String!
    apartments: [Apartment!]
  }

  # A Apartment has a apartmentId and people
  type Apartment {
    apartmentId: String!
    people: [Person!]
  }

  # People has a name
  type Person {
    personName: String!
  }

  # Queries can fetch a list of libraries
  type Query {
    blocks: [Block]
    apartments:[Apartment]
    people:[Person]
  }
`