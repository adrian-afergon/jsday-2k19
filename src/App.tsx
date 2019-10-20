import React, { useState } from 'react';
import './App.css';
import { VideosNavbar } from './containers/VideosNavbar';
import { VideoDetails } from './containers/VideoDetails';
import { Video } from './models/video';

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSave = () => {
    throw new Error('Not implemented');
  };

  return (
    <div className="App">
      <header className="App-header" >
        My videos
      </header>
      <section className="App-content">
        <VideosNavbar videos={[]} categories={[]}/>
        <VideoDetails selectedVideo={selectedVideo} onSave={handleSave}/>
      </section>
    </div>
  );
};

export default App;
