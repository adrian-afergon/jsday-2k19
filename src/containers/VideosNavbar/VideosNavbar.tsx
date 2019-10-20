import * as React from 'react';
import './VideosNavbar.scss';
import { Video, VideoId } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';

interface VideosNavbarProps {
  videos: Video [];
  categories: string[];
}

export const VideosNavbar: React.FC<VideosNavbarProps> = ({videos, categories}) => {

  const handleClick = () => {
    return new Error('Uninplemented method');
  };

  return (
    <nav className="VideosNavbar" data-testid="VideosNavbar">
      {videos && videos.length === 0 && 'Not videos found'}
      {videos.map((video) =>
        <VideoItem
          key={video.id}
          onClick={handleClick}
          data-testid="video-item"/>,
      )}
    </nav>
  );
};

VideosNavbar.displayName = 'VideosNavbar';
