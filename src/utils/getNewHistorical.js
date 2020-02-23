import checkIsTie from './checkIsTie';

const getNewHistorical = ({ history, globalScore, data }) => {
  const { winner } = data;
  let newLine;

  if (checkIsTie({ data })) {
    newLine = `There has been a tie between Party 1 (${globalScore.party1} points) and Party 2 (${globalScore.party2} points)`;
  }

  if (winner === 'party1') {
    newLine = `Party 1 (${globalScore.party1} points) has won to Party 2 (${globalScore.party2} points)`;
  }
  if (winner === 'party2') {
    newLine = `Party 2 (${globalScore.party2} points) has won to Party 1 (${globalScore.party1} points)`;
  }

  return [...history, newLine];
};

export default getNewHistorical;
