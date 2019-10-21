import * as React from 'react';
import './Videos.scss';
import { VideosNavbar } from '../VideosNavbar';
import { VideoDetails } from '../VideoDetails';
import { VideosRepository } from './Videos.spec';
import { Video } from '../../models/video';

interface VideosProps {
  dependencies: {
    videosRepository: VideosRepository;
  };
}

export const Videos: React.FC<VideosProps> = ({dependencies}) => {
  const { videosRepository }  = dependencies;
  const [videos, setVideos] = React.useState([] as Video[]);

  React.useEffect(() => {
    videosRepository.getVideos().then(setVideos);
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
