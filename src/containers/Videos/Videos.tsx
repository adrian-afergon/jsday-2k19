import * as React from 'react';
import './Videos.scss';
import { VideosNavbar } from '../VideosNavbar';
import { VideoDetails } from '../VideoDetails';
import { Video } from '../../models/video';
import { AppDependencies } from '../../AppDependencies';

interface VideosProps {
  dependencies: AppDependencies;
}

export const Videos: React.FC<VideosProps> = ({dependencies}) => {
  const { videosRepository, categoriesRepository }  = dependencies;
  const [videos, setVideos] = React.useState([] as Video[]);
  const [categories, setCategories] = React.useState([] as string[]);

  React.useEffect(() => {
    videosRepository.getVideos().then(setVideos);
    categoriesRepository.getCategories().then(setCategories);
  }, []);

  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const handleSave = () => {
    throw new Error('Not implemented');
  };

  return <section className="Videos">
    <VideosNavbar videos={videos} categories={[]}/>
    <VideoDetails selectedVideo={selectedVideo} onSave={handleSave}/>
  </section>;
};

Videos.displayName = 'Videos';
