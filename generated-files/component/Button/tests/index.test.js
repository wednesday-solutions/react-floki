/**
 *
 * Tests for Button
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from '@utils/testUtils';
import Button from '../index';

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Button />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Button component', () => {
    const { getAllByTestId } = renderWithIntl(<Button />);
    expect(getAllByTestId('button').length).toBe(1);
  });
});
