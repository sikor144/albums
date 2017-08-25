import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../../src/components/Button';

describe('Button component', () => {
  it('renders component correctly', () => {
    const component = renderer.create(
      <Button />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
