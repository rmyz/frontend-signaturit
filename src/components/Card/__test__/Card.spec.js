import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from '..';

describe('components/Card', () => {
  it('should render the card without crashing ', () => {
    const { getByTestId } = render(<Card />);

    const cardElement = getByTestId('cardWrapper');

    expect(cardElement).toBeInTheDocument();
  });

  it('should render the title when passed by props', () => {
    const { getByTestId } = render(<Card title="Party 1" />);

    const titleElement = getByTestId('titleWrapper');

    expect(titleElement.textContent).toEqual('Party 1');
  });

  it('should render the input with the values passed', () => {
    const { getByTestId } = render(<Card labelText="Contract" contract="KKN" />);

    const inputCard = getByTestId('labelInput');

    expect(inputCard.textContent).toEqual('Contract');
  });

  it('should render the score with the values passed', () => {
    const { getByTestId } = render(<Card score={4} title="Party 1" />);

    const scoreWrapper = getByTestId('scoreWrapper');

    expect(scoreWrapper.textContent).toEqual('Party 1 has 4 points');
  });

  it('should fire the click on a button', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Card onClickKing={onClickMock} />);

    const button = getByTestId('buttonK');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
