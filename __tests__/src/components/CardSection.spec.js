import React from 'react';
import renderer from 'react-test-renderer';

import CardSection from '../../../src/components/CardSection';

describe('CardSection component', () => {
  it('renders component correctly', () => {
    const component = renderer.create(
      <CardSection />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
