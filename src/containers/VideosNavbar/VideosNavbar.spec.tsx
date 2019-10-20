import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VideosNavbar} from './';
import { Video, VideoId } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';

describe('VideosNavbar', () => {
  let categories: string [];
  let videos: Video[];

  beforeEach(() => {
    categories = [];
    videos = [];
  });

  it('should display all the videos', () => {
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const foundVideos = renderResult
      .getByTestId('VideosNavbar')
      .querySelectorAll('VideoItem');
    expect(foundVideos.length).toBe(videos.length);
  });
});
