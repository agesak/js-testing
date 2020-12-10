const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    const text = 'the quick brown fox jumps over the lazy dog';
    expect(isPangram(text)).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    const text = 'abcdefghijklmnopqrstuvwxyz';
    expect(isPangram(text)).toBe(true);
  });

  test("missing character 'x'", () => {
    const text = 'abcdefghijklmnopqrstuvwyz';
    expect(isPangram(text)).toBe(false);
  });

  test('empty sentence', () => {
    const text = ''
    expect(isPangram(text)).toBe(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    expect(isPangram(text)).toBe(true);
  });

  test('pangram with numbers', () => {
    const text = 'the1quick2brown3fox4jumps5over6the7lazy8dog';
    expect(isPangram(text)).toBe(true);
  });
  
  test('pangram with upcase', () => {
    const text = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
    expect(isPangram(text)).toBe(true);
  });
});
