import * as React from 'react';
import './ReplyComment.scss';
import { useState } from 'react';

interface ReplyCommentProps {
  saveComment: (newComment: string) => void;
}

export const ReplyComment: React.FC<ReplyCommentProps> = ({saveComment}) => {

  const [newComment, setNewComment] = useState('');
  const onSubmit = () => {
    saveComment(newComment);
  };

  return (
    <form className="ReplyComment" onSubmit={onSubmit}>
      <textarea data-testid="textarea" onChange={(event) => {setNewComment(event.target.value); }} value={newComment}/>
      <button data-testid="reply" type="submit">Reply</button>
    </form>
  );
};

ReplyComment.displayName = 'ReplyComment';
