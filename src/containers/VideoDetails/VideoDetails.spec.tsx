import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VideoDetails} from './';
import { buildVideoWidth } from '../../helpers/build-video';

describe('VideoDetails', () => {
  it('should display the default message when not have a video selected', () => {
    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={null}/>,
    );
    expect(renderResult.queryByText('Choose a video')).toBeTruthy();
  });

  it('should display the video info', () => {
    const video = buildVideoWidth({id: '1'});

    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={video}/>,
    );

    expect(
      renderResult.getByTestId(`video-details-${video.id}`),
    ).toBeTruthy();
  });
});
