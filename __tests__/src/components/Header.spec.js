import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../../src/components/Header';

describe('Header component', () => {
  it('renders component correctly', () => {
    const component = renderer.create(
      <Header />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
