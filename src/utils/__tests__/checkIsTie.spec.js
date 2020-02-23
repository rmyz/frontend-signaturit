import checkIsTie from '../checkIsTie';

describe('utils/checkIsTie', () => {
  it('should return is tie', () => {
    const data = { winner: 'tie' };
    const result = checkIsTie({ data });

    expect(result).toBe(true);
  });

  it('should return is not a tie', () => {
    const data = { winner: 'party2' };
    const result = checkIsTie({ data });

    expect(result).toBe(false);
  });
});
