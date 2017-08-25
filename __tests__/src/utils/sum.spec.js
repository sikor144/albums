const sum = require('../../../src/utils/sum');

describe('sum', () => {
  it('returns proper values 1', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('returns proper values 2', () => {
    expect(sum(10, 20)).toBe(30);
  });
});
