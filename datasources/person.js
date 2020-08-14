const people = require('../data/people.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class PeopleAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config) {

  }
  getPeople(args) {
    return _.filter(people, args);
  }
}
module.exports = PeopleAPI;