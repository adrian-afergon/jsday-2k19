import * as React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { VideosNavbar } from './';
import { Video } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';
import { buildVideoWidth } from '../../helpers/build-video';

const findVideosInCategory = (
  renderResult: RenderResult,
  categoryBlockTestId: string) =>
  renderResult
  .getByTestId(categoryBlockTestId)
  .querySelectorAll('[data-testid^=\'video-item\']');

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
    expect(renderResult.queryByText('Not videos found')).toBeTruthy();
  });

  it('should display all the videos', () => {
    const aVideo1: Video = buildVideoWidth({id : '1'});
    const aVideo2: Video = buildVideoWidth({id : '2'});
    videos = [aVideo1, aVideo2];
    categories = ['irrelevant']; // TODO: we need to implement what happen when a video is not in a category
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
    const aVideo1: Video = buildVideoWidth({id : '1', category: terrorCategory});
    const aVideo2: Video = buildVideoWidth({id : '2', category: actionCategory});
    const aVideo3: Video = buildVideoWidth({id : '3', category: actionCategory});

    categories = [terrorCategory, actionCategory];
    videos = [aVideo1, aVideo2, aVideo3];
    const properties = {categories, videos};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    const videosInTerror = findVideosInCategory(renderResult, 'category-block-terror');
    const videosInAction = findVideosInCategory(renderResult, 'category-block-action');

    expect(videosInTerror.length).toBe(1);
    expect(videosInAction.length).toBe(2);
    // what happen in videos without category? -> new test
  });

  it('should do something when select a video', () => {
    const terrorCategory = 'terror';
    const actionCategory = 'action';
    const aVideo1: Video = buildVideoWidth({id : '1', category: terrorCategory});
    const aVideo2: Video = buildVideoWidth({id : '2', category: actionCategory});
    const aVideoToBeSelected: Video = buildVideoWidth({id : '3', category: actionCategory});

    const onSelectVideo = jest.fn();

    categories = [terrorCategory, actionCategory];
    videos = [aVideo1, aVideo2, aVideoToBeSelected];
    const properties = {categories, videos, onSelectVideo};
    const renderResult: RenderResult = render(
      <VideosNavbar {...properties}/>,
    );

    fireEvent.click(renderResult.getByTestId(`video-item-${aVideoToBeSelected.id}`));

    expect(onSelectVideo).toHaveBeenCalledWith(aVideoToBeSelected);
  });
});
