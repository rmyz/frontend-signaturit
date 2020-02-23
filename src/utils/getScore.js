import checkIsTie from './checkIsTie';

const getScore = ({ globalScore, data }) => {
  const { winner } = data;

  if (checkIsTie({ data })) {
    return globalScore;
  }

  if (winner === 'party1') {
    return { party1: globalScore.party1 + 1, party2: globalScore.party2 };
  }

  return { party1: globalScore.party1, party2: globalScore.party2 + 1 };
};

export default getScore;
