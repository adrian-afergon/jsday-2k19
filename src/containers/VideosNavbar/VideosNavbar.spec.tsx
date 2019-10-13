import * as React from 'react';
import { render } from '@testing-library/react';
import { VideosNavbar} from './';

describe('VideosNavbar', () => {
  it('should display the default message', () => {
    const { queryByText } = render(
      <VideosNavbar/>,
    );
    expect(queryByText('Hello from VideosNavbar!')).toBeTruthy();
  });
});
