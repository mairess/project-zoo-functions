const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  test('Return an object whith all days of week with two properties, one for opening another for clossing time when call function without pass params', () => {
    expect(getOpeningHours()).toMatchObject({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Return the string "The zoo is closed" when call getOpeningHours("Monday", "09:00-AM")', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch(closed);
    expect(getOpeningHours('Monday', '09:00-AM')).not.toMatch(open);
  });
  test('Return "The zoo is open" when call getOpeningHours("Monday", "09:00-AM")', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch(open);
    expect(getOpeningHours('Tuesday', '09:00-AM')).not.toMatch(closed);
  });
  test('Return "The zoo is open" when call getOpeningHours("Wednesday", "09:00-PM")', () => {
    expect(getOpeningHours('Tuesday', '09:00-PM')).toMatch(closed);
    expect(getOpeningHours('Tuesday', '09:00-PM')).not.toMatch(open);
  });
  test('Throw the error message "The day must be valid. Example: Monday" when call getOpeningHours with non-english weekday getOpeningHours("Segunda-feira", "09:00-PM")', () => {
    expect(() => {
      getOpeningHours('Segunda-feira', '09:00-PM');
    }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  test('The hours must be AM PM format, otherwise throw the error message "The abbreviation must be \'AM\' or \'PM\'")', () => {
    expect(() => {
      getOpeningHours('Thursday', '10:00-xd');
    }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => {
      getOpeningHours('Thursday', '10:00-AA');
    }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('The hours must be XX:XX-XM, otherwise throw the an error message', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow(new Error('The hour should represent a number'));
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow(new Error('The minutes should represent a number'));
  });
  test('The hour must be between 0 and 12, otherwise throw the an error message', () => {
    expect(() => {
      getOpeningHours('Saturday', '99:00-AM');
    }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  test('The minutes must be between 0 and 59, otherwise throw the an error message', () => {
    expect(() => {
      getOpeningHours('Saturday', '9:987-AM');
    }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  test('verify function fix12', () => {
    expect(getOpeningHours('Thursday', '12:00-pm')).toBe(open);
  });
});
