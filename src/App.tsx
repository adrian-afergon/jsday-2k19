import React from 'react';
import './App.css';
import { Videos } from './containers/Videos';
import { AppDependencies, initializeDependencies } from './AppDependencies';

const App: React.FC = () => {

  const dependencies: AppDependencies = initializeDependencies();

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
