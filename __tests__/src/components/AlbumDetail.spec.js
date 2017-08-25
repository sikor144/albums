import React from 'react';
import renderer from 'react-test-renderer';

import AlbumDetail from '../../../src/components/AlbumDetail';

describe('AlbumDetail component', () => {
  it('renders component correctly', () => {
    const album = {
      title: 'Some title',
      artist: 'Some artist',
      url: 'Some url',
      thumbnail_image: 'Thumbnail',
    };
    const component = renderer.create(
      <AlbumDetail album={album} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
