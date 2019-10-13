import * as React from 'react';
import { render } from '@testing-library/react';
import { CategoryTitle} from './';

describe('CategoryTitle', () => {
  it('should display the default message', () => {
    const aCategoryTitle = 'Irrelevant title';
    const { queryByText } = render(
      <CategoryTitle>{aCategoryTitle}</CategoryTitle>,
    );
    expect(queryByText(aCategoryTitle)).toBeTruthy();
  });
});
