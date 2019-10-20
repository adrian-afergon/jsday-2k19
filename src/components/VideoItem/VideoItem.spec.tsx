import * as React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { VideoItem} from './';

describe('VideoItem', () => {
  let selectAVideo: () => void;
  let aVideoName: string;
  let videoItem: RenderResult;

  beforeEach(() => {
    selectAVideo = jest.fn();
    aVideoName = 'irrelevant video name';
    videoItem = render(
      <VideoItem onClick={selectAVideo}>{aVideoName}</VideoItem>,
    );
  });

  it('should display the default message', () => {
    expect(videoItem.queryByText(aVideoName)).toBeTruthy();
  });

  it('should do something when is clicked', () => {
    fireEvent.click(videoItem.getByText(aVideoName));
    expect(selectAVideo).toHaveBeenCalled();
  });
});
