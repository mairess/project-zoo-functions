const data = require('../data/zoo_data');

const {
  Tuesday: openingTue,
  Wednesday: openingWed,
  Thursday: openingThu,
  Friday: openingFri,
  Saturday: openingSat,
  Sunday: openingSun,
} = data.hours;

const animalNames = data.species.map((specie) => specie.name);
const daysOfWeek = Object.keys(data.hours);

const availablesTue = data.species.filter((specie) =>
  specie.availability.includes('Tuesday'))
  .map((specie) => specie.name);
const availablesWed = data.species.filter((specie) =>
  specie.availability.includes('Wednesday'))
  .map((specie) => specie.name);
const availablesThu = data.species.filter((specie) =>
  specie.availability.includes('Thursday'))
  .map((specie) => specie.name);
const availablesFri = data.species.filter((specie) =>
  specie.availability.includes('Friday'))
  .map((specie) => specie.name);
const availablesSat = data.species.filter((specie) =>
  specie.availability.includes('Saturday'))
  .map((specie) => specie.name);
const availablesSun = data.species.filter((specie) =>
  specie.availability.includes('Sunday'))
  .map((specie) => specie.name);

const defaultAvailability = [
  {
    Tuesday: {
      officeHour: `Open from ${openingTue.open}am until ${openingTue.close}pm`,
      exhibition: availablesTue,
    },
    Wednesday: {
      officeHour: `Open from ${openingWed.open}am until ${openingWed.close}pm`,
      exhibition: availablesWed,
    },
    Thursday: {
      officeHour: `Open from ${openingThu.open}am until ${openingThu.close}pm`,
      exhibition: availablesThu,
    },
    Friday: {
      officeHour: `Open from ${openingFri.open}am until ${openingFri.close}pm`,
      exhibition: availablesFri,
    },
    Saturday: {
      officeHour: `Open from ${openingSat.open}am until ${openingSat.close}pm`,
      exhibition: availablesSat,
    },
    Sunday: {
      officeHour: `Open from ${openingSun.open}am until ${openingSun.close}pm`,
      exhibition: availablesSun,
    },
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  },
  availablesTue,
  availablesWed,
  availablesThu,
  availablesFri,
  availablesSat,
  availablesSun,
];

const [theDays] = defaultAvailability;

const getSchedule = (scheduleTarget) => {
  if (animalNames.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: theDays[scheduleTarget] };
  }
  return theDays;
};

module.exports = getSchedule;
