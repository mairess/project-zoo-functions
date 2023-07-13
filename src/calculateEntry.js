const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  const total = adultPrice * adult + seniorPrice * senior + childPrice * child;
  return total;
};

module.exports = { calculateEntry, countEntrants };
