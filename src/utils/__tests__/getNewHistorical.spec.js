import getNewHistorical from '../getNewHistorical';

describe('utils/getNewHistorical', () => {
  const history = ['test', 'test1'];
  const globalScore = { party1: 1, party2: 2 };

  it('should return the historical with a tie', () => {
    const data = { winner: 'tie' };
    const result = getNewHistorical({ history, globalScore, data });

    expect(result).toEqual([...history, 'There has been a tie between Party 1 (1 points) and Party 2 (2 points)']);
  });

  it('should return the historical with a win for party1', () => {
    const data = { winner: 'party1' };
    const result = getNewHistorical({ history, globalScore, data });

    expect(result).toEqual([...history, 'Party 1 (2 points) has won to Party 2 (2 points)']);
  });

  it('should return the historical with a win for party1', () => {
    const data = { winner: 'party2' };
    const result = getNewHistorical({ history, globalScore, data });

    expect(result).toEqual([...history, 'Party 2 (3 points) has won to Party 1 (1 points)']);
  });
});
