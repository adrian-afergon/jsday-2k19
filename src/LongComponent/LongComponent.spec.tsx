import * as React from 'react';
import { render } from '@testing-library/react';
import { LongComponent} from './';

describe('LongComponent', () => {
  it('should display the default message', () => {
    const { queryByText } = render(
      <LongComponent/>,
    );
    expect(queryByText('Hello from LongComponent!')).toBeTruthy();
  });
});
