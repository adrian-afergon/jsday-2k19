import * as React from 'react';
import './VideoItem.scss';

interface VideoItemProps {
  onClick: () => void;
  'data-testid'?: string;
}
export const VideoItem: React.FC<VideoItemProps> = ({onClick, children, ...props}) => (
  <div
    data-testid={props['data-testid']}
    className="VideoItem"
    onClick={(event) => {onClick(); }}>
    {children}
  </div>
);

VideoItem.displayName = 'VideoItem';
