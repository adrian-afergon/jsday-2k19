import * as React from 'react';
import './VideosNavbar.scss';
import { Video, VideoId } from '../../models/video';
import { VideoItem } from '../../components/VideoItem';
import { CategoryTitle } from '../../components/CategoryTitle';
import { ClassifiedVideos } from '../../models/clasified-videos';

interface VideosNavbarProps {
  videos: Video [];
  categories: string[];
  onSelectVideo?: (video: Video) => void;
}

export const VideosNavbar: React.FC<VideosNavbarProps> = ({videos, categories, onSelectVideo}) => {

  const [classifiedVideos, setClassifiedVideos] = React.useState({} as ClassifiedVideos);

  const isVideoOnCategory = (category: string) =>
    (video: Video) => category === video.category;

  React.useEffect( () => {
    setClassifiedVideos(
      categories.reduce((total, category) => {
        const foundedVideosOnCategory = videos.filter(isVideoOnCategory(category));
        return {...total, [category]: foundedVideosOnCategory};
      }, {}),
    );
  }, [videos, categories]);

  const handleClick = (videoId: VideoId) => {
    if (onSelectVideo) {
      const selectedVideo = videos.find((video) => video.id === videoId);
      if (selectedVideo) {
        onSelectVideo(selectedVideo);
      }
    }
  };

  return (
    <nav className="VideosNavbar" data-testid="VideosNavbar">
      {videos && videos.length === 0 && 'Not videos found'}
      {categories.map((category, index) =>
        <section key={`category-block-${category}`}
                 data-testid={`category-block-${category}`}>
          <CategoryTitle data-testid={`category-title-${index}`}>
            {category}</CategoryTitle>
          {classifiedVideos[category] && classifiedVideos[category].map( (video) =>
            <VideoItem
              key={video.id}
              onClick={handleClick}
              data-testid={`video-item-${video.id}`}
              videoId={video.id}>
              {video.title}
            </VideoItem>,
          )}
        </section>)}
    </nav>
  );
};

VideosNavbar.displayName = 'VideosNavbar';
