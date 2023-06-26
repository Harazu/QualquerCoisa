const div = require('./div');

test('divisão convencional', () => {
  expect(div(10, 2)).toBe(5);
});

test('Divisão por zero', () => {
  expect(div(5, 0)).toBe(0);
});