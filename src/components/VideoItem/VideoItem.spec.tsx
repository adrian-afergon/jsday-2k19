import * as React from 'react';
import { render } from '@testing-library/react';
import { VideoItem} from './';

describe('VideoItem', () => {
  it('should display the default message', () => {
    const { queryByText } = render(
      <VideoItem/>,
    );
    expect(queryByText('Hello from VideoItem!')).toBeTruthy();
  });
});
