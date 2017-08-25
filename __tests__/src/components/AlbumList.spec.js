import React from 'react';
import renderer from 'react-test-renderer';

import AlbumList from '../../../src/components/AlbumList';

describe('AlbumList component', () => {
  it('renders component correctly', () => {
    const component = renderer.create(
      <AlbumList />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
