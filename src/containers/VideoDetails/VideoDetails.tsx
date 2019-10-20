import * as React from 'react';
import './VideoDetails.scss';
import { Video } from '../../models/video';
import { Commment } from '../../components/Commment';
import { ReplyComment } from '../../components/ReplyComment';

interface VideoDetailsProps {
  selectedVideo: Video | null;
  onSave: (comment: string) => void;
}

export const VideoDetails: React.FC<VideoDetailsProps> = ({selectedVideo, onSave}) => (
  <div className="VideoDetails">
    {selectedVideo ?
      <div data-testid={`video-details-${selectedVideo.id}`}>
        <iframe src={selectedVideo.url} title={selectedVideo.title} />
        {selectedVideo.comments.map((comment) => <Commment>{comment}</Commment> )}
        <ReplyComment onSave={onSave}/>
      </div> :
      'Choose a video'}
  </div>
);

VideoDetails.displayName = 'VideoDetails';
