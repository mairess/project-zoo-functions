const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species.filter((animals) => animals.name === animal)
    .every((residents) => residents.residents[0].age > age);
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
