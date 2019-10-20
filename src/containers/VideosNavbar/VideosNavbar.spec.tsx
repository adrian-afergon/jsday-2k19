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

  it('should display a message when list of videos is empty', () => {
    videos = [];
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const foundVideos = renderResult
      .getByTestId('VideosNavbar')
      .querySelectorAll('VideoItem');
    // expect(foundVideos.length).toBe(videos.length);
    expect(renderResult.queryByText('Not videos found')).toBeTruthy();
  });

  it('should display all the videos', () => {
    const aVideo1: Video = {title: 'irrelevant', url: 'irrelevant', comments: [], category: 'irrelevant', id: '1'};
    const aVideo2: Video = {title: 'irrelevant', url: 'irrelevant', comments: [], category: 'irrelevant', id: '2'};
    videos = [aVideo1, aVideo2];
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const foundVideos = renderResult
      .queryAllByTestId('video-item', { exact: false });
    expect(foundVideos.length).toBe(videos.length);
  });

  it('should display all the categories', () => {
    categories = ['irrelevant category one', 'irrelevant category two'];
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const foundCategories = renderResult
      .queryAllByTestId('category-title', { exact: false });
    expect(foundCategories.length).toBe(categories.length);
  });
});
