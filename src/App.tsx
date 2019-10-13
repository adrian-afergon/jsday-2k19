import React from 'react';
import './App.css';
import { VideosNavbar } from './containers/VideosNavbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" >
        My videos
      </header>
      <section>
        <VideosNavbar />
      </section>
    </div>
  );
};

export default App;
