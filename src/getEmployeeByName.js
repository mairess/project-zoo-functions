const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  (employeeName === undefined ? {} : data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName));
module.exports = getEmployeeByName;
