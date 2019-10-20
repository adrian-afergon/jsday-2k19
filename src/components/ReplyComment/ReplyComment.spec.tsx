import * as React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { ReplyComment} from './';

describe('ReplyComment', () => {
  it('should save the message', () => {

    const saveComment = jest.fn();
    const typedText = 'This is a new comment!';

    const renderResult: RenderResult = render(
      <ReplyComment saveComment={saveComment}/>,
    );

    fireEvent.change(renderResult.getByTestId('textarea'), { target: { value: typedText } });
    fireEvent.click(renderResult.getByTestId('reply'));

    expect(saveComment).toHaveBeenCalledWith(typedText);
  });
});
