import getScore from '../getScore';

describe('utils/getScore', () => {
  const globalScore = { party1: 2, party2: 4 };

  it('should return the actual score if it is a tie', () => {
    const data = { winner: 'tie' };

    const result = getScore({ globalScore, data });

    expect(result).toEqual(globalScore);
  });

  it('should return the global score with one more point for party1', () => {
    const data = { winner: 'party1' };

    const result = getScore({ globalScore, data });

    expect(result).toEqual({ party1: 3, party2: 4 });
  });

  it('should return the global score with one more point for party2', () => {
    const data = { winner: 'party2' };

    const result = getScore({ globalScore, data });

    expect(result).toEqual({ party1: 2, party2: 5 });
  });
});
