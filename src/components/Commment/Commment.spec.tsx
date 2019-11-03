import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Commment} from './';

describe('Commment', () => {
  it('should display the message', () => {
    const comment = 'This is my comment!';
    const renderResult: RenderResult = render(
      <Commment>{comment}</Commment>,
    );
    expect(renderResult.queryByText(comment)).toBeTruthy();
  });
});
