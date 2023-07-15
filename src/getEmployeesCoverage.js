const data = require('../data/zoo_data');

const getLocation = ([...ids]) => {
  const locations = [];
  ids.forEach((id) => {
    const { location } = data.species.find((specie) => specie.id === id);
    locations.push(location);
  });

  return locations;
};

const getName = ([...ids]) => {
  const names = [];
  ids.forEach((id) => {
    const { name } = data.species.find((specie) => specie.id === id);
    names.push(name);
  });

  return names;
};

const getFullCoverage = () => data.employees.map((employee) => {
  const { firstName, lastName, id, responsibleFor: species } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getName(species),
    locations: getLocation(species) };
});

const getEmployeesCoverage = ({ name, id } = {}) => {
  if (name || id) {
    const employeeInformations = data.employees.find((employee) =>
      employee.firstName === name || employee.lastName === name || employee.id === id);
    if (employeeInformations) {
      const { firstName, lastName, id: personId, responsibleFor: species } = employeeInformations;
      return { id: personId,
        fullName: `${firstName} ${lastName}`,
        species: getName(species),
        locations: getLocation(species) };
    }
    throw new Error('Informações inválidas');
  }
  return getFullCoverage();
};

module.exports = getEmployeesCoverage;
