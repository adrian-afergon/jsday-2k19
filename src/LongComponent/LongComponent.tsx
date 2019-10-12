import * as React from 'react';
import './LongComponent.scss';

interface Video {
  title: string;
  category: string;
  url: string;
  comments: string[];
}

interface ClassifiedVideos {
  [key: string]: Video[];
}

export const LongComponent: React.FC<{}> = () => {

  const [categories] = React.useState([] as string []);
  const [videos, setVideos] = React.useState([] as Video[]);
  const [classifiedVideos, setClassifiedVideos] = React.useState({} as ClassifiedVideos);
  const [selectedVideo, setSelectedVideo] = React.useState({} as Video);
  const [newCommentary, setNewCommentary] = React.useState('');

  React.useEffect( () => {
    setVideos([
      // ...videos retrieved from api
    ]);

    setClassifiedVideos(
      categories.reduce((total, category) => {
        const foundedVideosOnCategory = videos.find((video) => category === video.category);
        return {...total, [category]: foundedVideosOnCategory};
      }, {}),
    );

  }, [categories, videos]);

  const saveCommentary = () => {
    // ... do something
  };

  return (
  <div className="LongComponent">
    <section>
    <ul>
      {categories.map((category) => (
        <li>
          { category }
          <ul>
            { classifiedVideos[category].map( (video) => (
              <li onClick={() => setSelectedVideo(video)}>{ video.title }</li>),
            )}
          </ul>
        </li>
      ))}
    </ul>
    </section>
    <form>
      <iframe src={selectedVideo.url} title={selectedVideo.title} />
      <ul>
        {selectedVideo.comments.map((commentary) => (
          <li>{commentary}</li>
        ))}
      </ul>
      <textarea onChange={(event) => {setNewCommentary(event.target.value); }}>{newCommentary}</textarea>
      <button onClick={saveCommentary} />
    </form>
  </div>
); };

LongComponent.displayName = 'LongComponent';
