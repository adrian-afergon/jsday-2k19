import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VideosNavbar} from './';
import { Video, VideoId } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';

describe('VideosNavbar', () => {
  let categories: string[];
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

  it('should display the videos classified by categories', () => {
    const terrorCategory = 'terror';
    const actionCategory = 'action';
    const aVideo1: Video = {title: 'irrelevant', url: 'irrelevant', comments: [], category: terrorCategory, id: '1'};
    const aVideo2: Video = {title: 'irrelevant', url: 'irrelevant', comments: [], category: actionCategory, id: '2'};
    const aVideo3: Video = {title: 'irrelevant', url: 'irrelevant', comments: [], category: actionCategory, id: '3'};
    categories = [terrorCategory, actionCategory];
    videos = [aVideo1, aVideo2, aVideo3];
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const videosInTerror = renderResult
      .getByTestId('category-block-terror')
      .querySelectorAll('[data-testid=\'video-item\']');
    const videosInAction = renderResult
      .getByTestId('category-block-action')
      .querySelectorAll('[data-testid=\'video-item\']');
    expect(videosInTerror.length).toBe(1);
    expect(videosInAction.length).toBe(2);
    // what happen in videos without category? -> new test
  });
});
