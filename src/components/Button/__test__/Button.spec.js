import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '..';

describe('components/Button', () => {
  it('should render the button without crashing', () => {
    const { getByTestId } = render(<Button />);
    const buttonElement = getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should render the button with the title', () => {
    const { getByTestId } = render(<Button title="TestTitle" />);
    const buttonElement = getByTestId('button');

    expect(buttonElement.textContent).toBe('TestTitle');
  });

  it('should fire onClick event on the mock', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock} />);
    const buttonElement = getByTestId('button');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
