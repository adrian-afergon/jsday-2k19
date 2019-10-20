import * as React from 'react';
import './ReplyComment.scss';
import { useState } from 'react';

interface ReplyCommentProps {
  onSave: (newComment: string) => void;
}

export const ReplyComment: React.FC<ReplyCommentProps> = ({onSave}) => {

  const [newComment, setNewComment] = useState('');
  const onSubmit = () => {
    onSave(newComment);
  };

  return (
    <form className="ReplyComment" onSubmit={onSubmit}>
      <textarea data-testid="textarea" onChange={(event) => {setNewComment(event.target.value); }} value={newComment}/>
      <button data-testid="reply" type="submit">Reply</button>
    </form>
  );
};

ReplyComment.displayName = 'ReplyComment';
