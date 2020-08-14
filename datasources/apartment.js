const apartments = require('../data/apartments.json');
const people = require('../data/people.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class ApartmentAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config) {

  }
  getApartments(args) {
    return _.filter(apartments, args);
  }
  getPersonByApartment(parent, args) {
    return _.filter(people, { apartmentId: parent.apartmentId });
  }
  // VALIDAR  
  getApartmentById(id) {
    const apartment = _.filter(apartments, { id: parseInt(id) })
    throw new Error();
    return apartment[0]
  }
  addApartment(apartment) {
    apartment.id = 12;
    apartments.push(apartment);
    console.log(apartment);
    return apartment;
  }
}
module.exports = ApartmentAPI;