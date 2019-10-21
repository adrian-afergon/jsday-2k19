import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Videos} from './';
import { Video } from '../../models/video';
import { VideoDetails } from '../VideoDetails';

export interface VideosRepository {
  getVideos: () => Promise<Video[]>;
}

describe('Videos', () => {

  it('should get the the videos when component is loaded', () => {
    const videosRepository: VideosRepository = {
      getVideos: jest.fn(() => Promise.resolve([])),
    };

    const renderResult: RenderResult = render(
      <Videos dependencies={{videosRepository}}/>,
    );
    expect(videosRepository.getVideos).toHaveBeenCalledTimes(1);
  });
});
