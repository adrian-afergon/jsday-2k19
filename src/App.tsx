import React, { useState } from 'react';
import './App.css';
import { VideosNavbar } from './containers/VideosNavbar';
import { VideoDetails } from './containers/VideoDetails';
import { Video } from './models/video';
import { Videos } from './containers/Videos';
import { AppDependencies } from './AppDependencies';

const App: React.FC = () => {

  const dependencies: AppDependencies = {
    videosRepository: { getVideos: () => Promise.resolve([]) },
    categoriesRepository: { getCategories: () => Promise.resolve([])},
  }

  return (
    <div className="App">
      <header className="App-header" >
        My videos
      </header>
      <section className="App-content">
        <Videos dependencies={dependencies}/>
      </section>
    </div>
  );
};

export default App;
