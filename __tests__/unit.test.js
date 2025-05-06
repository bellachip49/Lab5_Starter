// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('isPhoneNumber - valid numbers', () => {
  expect(isPhoneNumber('(415) 447-6823')).toBe(true);
  expect(isPhoneNumber('510-783-8928')).toBe(true);
});

test('isPhoneNumber - invalid numbers', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('cat-bat-hats')).toBe(false);
});

test('isEmail - valid emails', () => {
  expect(isEmail('someone@address.com')).toBe(true);
  expect(isEmail('cse110@ucsd.edu')).toBe(true);
});

test('isEmail - invalid emails', () => {
  expect(isEmail('newuser@.com')).toBe(false);
  expect(isEmail('not-an-address')).toBe(false);
});

test('isStrongPassword - valid passwords', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
  expect(isStrongPassword('K_97442')).toBe(true);
});

test('isStrongPassword - invalid passwords', () => {
  //starts with number
  expect(isStrongPassword('1st-place')).toBe(false);
  //not enough chars
  expect(isStrongPassword('P')).toBe(false);
});

test('isDate - valid dates', () => {
  expect(isDate('12/25/2020')).toBe(true);
  expect(isDate('1/1/1999')).toBe(true);
});

test('isDate - invalid dates', () => {
  // used dashes instead
  expect(isDate('13-4-1998')).toBe(false);
  // invalid month (wrong format)
  expect(isDate('19999999999999993/4/1998')).toBe(false);
});

test('isHexColor - valid hex colors', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('123abc')).toBe(true);
});

test('isHexColor - invalid hex colors', () => {
  //4 chars
  expect(isHexColor('#1234')).toBe(false);
  //invalid 3 chars
  expect(isHexColor('GGG')).toBe(false);
});