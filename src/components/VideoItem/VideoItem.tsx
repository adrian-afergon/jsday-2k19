import * as React from 'react';
import './VideoItem.scss';
import { VideoId } from '../../models/video';

interface VideoItemProps {
  onClick: (videoId: VideoId) => void;
  videoId: VideoId;
  'data-testid'?: string;
}
export const VideoItem: React.FC<VideoItemProps> = ({onClick, videoId, children, ...props}) => (
  <button
    data-testid={props['data-testid']}
    className="VideoItem"
    onClick={() => {onClick(videoId); }}>
    {children}
  </button>
);

VideoItem.displayName = 'VideoItem';
