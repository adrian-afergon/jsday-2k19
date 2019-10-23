import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { VideoDetails} from './';
import { buildVideoWidth } from '../../helpers/build-video';

describe('VideoDetails', () => {
  it('should display the default message when not have a video selected', () => {
    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={null} onSave={jest.fn()}/>,
    );
    expect(renderResult.queryByText('Choose a video')).toBeTruthy();
  });

  it('should display the video info', () => {
    const video = buildVideoWidth({id: '1'});

    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={video} onSave={jest.fn()}/>,
    );

    expect(
      renderResult.getByTestId(`video-details-${video.id}`),
    ).toBeTruthy();
  });

  it('should display a message when no comments added', () => {
    const video = buildVideoWidth({id: '1'});

    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={video} onSave={jest.fn()}/>,
    );

    expect(
      renderResult.findAllByText('No comments added yet'),
    ).toBeTruthy();
  });
  it('should not display a message when comments added', () => {
    const video = buildVideoWidth({id: '1', comments: ['This is an irrelevant comment']});

    const renderResult: RenderResult = render(
      <VideoDetails selectedVideo={video} onSave={jest.fn()}/>,
    );

    expect(
      renderResult.findAllByText('No comments added yet'),
    ).toBeFalsy();
  });
});
