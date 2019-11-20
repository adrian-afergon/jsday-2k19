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
        <h2 data-testid={`video-details-title-${selectedVideo.id}`}>{selectedVideo.title}</h2>
        <iframe src={selectedVideo.url} title={selectedVideo.title} />
        {selectedVideo.comments && selectedVideo.comments.length > 0 ?
          selectedVideo.comments.map((comment, index) => <Commment key={`comment-${index}`}>{comment}</Commment>) :
          <p>No comments yet</p>
        }
        <ReplyComment onSave={onSave}/>
      </div> :
      'Choose a video'}
  </div>
);

VideoDetails.displayName = 'VideoDetails';
