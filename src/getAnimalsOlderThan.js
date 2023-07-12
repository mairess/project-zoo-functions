const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species.filter((animals) => animals.name === animal)
    .every((resident, index) => resident.residents[index].age > age);
module.exports = getAnimalsOlderThan;
