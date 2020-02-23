import React from 'react';
import { render } from '@testing-library/react';
import Historical from '..';

describe('components/Historical', () => {
  it('should render the component without crashing', () => {
    const { getByTestId } = render(<Historical />);

    const historicalElement = getByTestId('historicalWrapper');

    expect(historicalElement).toBeInTheDocument();
  });

  it('should render the items passed', () => {
    const history = ['1', '2', '3'];

    const { getByTestId } = render(<Historical history={history} />);

    const historicalElement = getByTestId('historicalWrapper');

    expect(historicalElement.childNodes.length).toBe(3);
  });
});
