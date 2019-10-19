import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VideoItem} from './';

describe('VideoItem', () => {
  it('should display the default message', () => {
    const selectAVideo = jest.fn();
    const aVideoName = 'irrelevant video name';
    const { getByText, queryByText } = render(
      <VideoItem onClick={selectAVideo}>{aVideoName}</VideoItem>,
    );
    expect(queryByText(aVideoName)).toBeTruthy();
  });

  it('should do something when is clicked', () => {
    const selectAVideo = jest.fn();
    const aVideoName = 'irrelevant video name';
    const { getByText, queryByText } = render(
      <VideoItem onClick={selectAVideo}>{aVideoName}</VideoItem>,
    );
    fireEvent.click(getByText(aVideoName));
    expect(selectAVideo).toHaveBeenCalled();
  });
});
