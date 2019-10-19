import * as React from 'react';
import './VideoItem.scss';

interface VideoItemProps {
  onClick: () => void;
}
export const VideoItem: React.FC<VideoItemProps> = ({onClick, children}) => (
  <div className="VideoItem" onClick={(event) => {onClick(); }}>{children}</div>
);

VideoItem.displayName = 'VideoItem';
