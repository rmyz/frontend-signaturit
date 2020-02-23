import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from '..';

describe('components/Input', () => {
  it('should render the component without crashing', () => {
    const { getByTestId } = render(<Input />);

    const inputWrapper = getByTestId('inputWrapper');

    expect(inputWrapper).toBeInTheDocument();
  });

  it('should render the title', () => {
    const { getByTestId } = render(<Input labelText="LabelTest" />);

    const labelInput = getByTestId('labelInput');

    expect(labelInput.textContent).toBe('LabelTest');
  });

  it('should fire the click event on clear button', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Input onClearClick={onClickMock} />);

    const clearButton = getByTestId('clearButton');

    fireEvent.click(clearButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(clearButton.textContent).toBe('CLEAR');
  });
});
