const blocks = require('../data/blocks.json');
const apartments = require('../data/apartments.json');;
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class BlockAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config) {

  }
  getBlocks(args) {
    return _.filter(blocks, args);
  }
  getApartmentsByBlockName(parent, args) {
    return _.filter(apartments, { blockName: parent.blockName });
  }
}
module.exports = BlockAPI;