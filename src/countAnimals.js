const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.species && animal.sex) {
    return data.species.find((specie) => specie.name === animal.species).residents
      .filter((specie) => specie.sex === animal.sex).length;
  }
  if (animal.species) {
    return data.species.find((specie) => specie.name === animal.species).residents.length;
  }
};
console.log(countAnimals({ species: 'bears', sex: 'female' }));
module.exports = countAnimals;
