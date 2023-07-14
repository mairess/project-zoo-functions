const data = require('../data/zoo_data');

const oldestAnimal = (animalId) => data.species.find((specie) =>
  specie.id === animalId).residents.sort((a, b) => b.age - a.age)[0];

const getOldestFromtheFirsts = (id) => {
  const theFirst = data.employees.find((person) =>
    person.id === id).responsibleFor.find((animalId) => animalId);
  return [oldestAnimal(theFirst).name, oldestAnimal(theFirst).sex, oldestAnimal(theFirst).age];
};

module.exports = getOldestFromtheFirsts;
