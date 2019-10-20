import * as React from 'react';
import './VideosNavbar.scss';
import { Video, VideoId } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';
import { CategoryTitle } from '../../components/CategoryTitle';

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
      {categories.map((category, index) =>
        <CategoryTitle
          key={`category-title-${index}`}
          data-testid={`category-title-${index}`}>
          {category}
        </CategoryTitle>)}
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
