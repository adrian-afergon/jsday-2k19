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
      <Videos dependencies={dependencies}/>
    </div>
  );
};

export default App;
