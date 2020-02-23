const checkIsTie = ({ data }) => {
  const { winner } = data;

  if (winner === 'tie') {
    return true;
  }

  return false;
};

export default checkIsTie;
