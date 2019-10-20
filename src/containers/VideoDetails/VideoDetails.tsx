import * as React from 'react';
import './VideoDetails.scss';
import { Video } from '../../models/video';

export const VideoDetails: React.FC<{selectedVideo: Video | null}> = ({selectedVideo}) => (
  <div className="VideoDetails">
    {selectedVideo ?
      <div data-testid={`video-details-${selectedVideo.id}`}>
        <iframe src={selectedVideo.url} title={selectedVideo.title} />
      </div> :
      'Choose a video'}
  </div>
);

VideoDetails.displayName = 'VideoDetails';
