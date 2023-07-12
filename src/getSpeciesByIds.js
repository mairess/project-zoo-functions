const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.reduce((acc, id) => [...acc, ...data.species.filter((specie) => specie.id === id)], []);
// const getSpeciesByIds = (...ids) => ids.flatMap((id) => data.species
//   .filter((specie) => specie.id === id));
module.exports = getSpeciesByIds;
