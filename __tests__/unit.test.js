// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('1234567890 is not a valid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('abcdef is not a valid phone number', () => {
  expect(isPhoneNumber('abcdef')).toBe(false);
});

test('user@gmail.com is a valid email', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});

test('user2@yahoo.com is a valid email', () => {
  expect(isEmail('user2@yahoo.com')).toBe(true);
});

test('user2@yahoo.toolong is not a valid email', () => {
  expect(isEmail('user2@yahoo.toolong')).toBe(false);
});

test('usergmail.toolong is not a valid email', () => {
  expect(isEmail('usergmail.toolong')).toBe(false);
});

test('a123 is a strong password', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('Z_abc123 is a strong password', () => {
  expect(isStrongPassword('Z_abc123')).toBe(true);
});

test('a123456789012345 is not a strong password', () => {
  expect(isStrongPassword('a123456789012345')).toBe(false);
});

test('a is not a strong password', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('1/1/2020 is a valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('10/10/2020 is a valid date', () => {
  expect(isDate('10/10/2020')).toBe(true);
});

test('10/10 is not a valid date', () => {
  expect(isDate('10/10')).toBe(false);
});

test('10/10/20 is not a valid date', () => {
  expect(isDate('10/10/20')).toBe(false);
});

test('#123456 is a valid hex color', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('123 is a valid hex color', () => {
  expect(isHexColor('123')).toBe(true);
});

test('12345 is not a valid hex color', () => {
  expect(isHexColor('12345')).toBe(false);
});

test('#12G is not a valid hex color', () => {
  expect(isHexColor('#12G')).toBe(false);
});