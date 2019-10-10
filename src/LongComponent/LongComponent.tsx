import * as React from 'react';
import './LongComponent.scss';

type Video = {
  title: string,
  category: string,
  url: string,
  comentaries: string[]
}

type ClasifiedVideos = {
  [key: string]: Video[]
}

export const LongComponent: React.FC<{}> = () => { 
  
  const [categories] = React.useState([] as string []);
  const [videos, setVideos] = React.useState([] as Video[]);
  const [clasifiedVideos, setClasifiedVideos] = React.useState({} as ClasifiedVideos);
  const [selectedVideo, setSelectedVideo] = React.useState({} as Video);
  const [commentary, setCommentary] = React.useState('');

  React.useEffect( () => {
    setVideos([
      // ...videos retrieved from api
    ]);

    setClasifiedVideos( 
      categories.reduce((total, category) => {
        const foundedVideosOnCategory = videos.find((video) => category === video.category);
        return {...total, [category]: foundedVideosOnCategory}
      }, {})
    );

  }, []);

  const saveCommentary = () => {
    // ... do something
  }

  return (
  <div className="LongComponent">
    <section>
    <ul>
      {categories.map((category) => (  
        <li>
          { category }
          <ul>
            { clasifiedVideos[category].map( (video) => (
              <li onClick={() => setSelectedVideo(video)}>{ video.title }</li>)
            )}
          </ul>
        </li>
      ))}
    </ul>
    </section>
    <form>
      <video></video>
      <ul>
        {selectedVideo.comentaries.map((commentary) => (
          <li>{commentary}</li>
        ))}
      </ul>
      <textarea onChange={(event) => {setCommentary(event.target.value)}}>{commentary}</textarea>
      <button onClick={saveCommentary}></button>
    </form>
  </div>
)};

LongComponent.displayName = 'LongComponent';
