import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../../../src/components/Card';

describe('Card component', () => {
  it('renders component correctly', () => {
    const component = renderer.create(
      <Card />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
