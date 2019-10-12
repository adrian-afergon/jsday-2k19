import * as React from 'react';
import './LayerOverlap.scss';

interface Video {
  id: string;
  title: string;
  category: string;
  url: string;
  comments: string[];
}

interface ClasifiedVideos {
  [key: string]: Video[];
}

export const LayerOverlap: React.FC<{}> = () => {

  const END_POINT = 'http://localhost:8080/videos';
  const [categories] = React.useState([] as string []);
  const [videos, setVideos] = React.useState([] as Video[]);
  const [classifiedVideos, setClassifiedVideos] = React.useState({} as ClasifiedVideos);
  const [selectedVideo, setSelectedVideo] = React.useState({} as Video);
  const [newCommentary, setNewCommentary] = React.useState('');

  const getVideos = async () => {
    const response = await fetch(END_POINT);
    setVideos(await response.json());
  };

  React.useEffect(() => {
    getVideos().then();
  }, []);

  React.useEffect( () => {
    setClassifiedVideos(
      categories.reduce((total, category) => {
        const foundedVideosOnCategory = videos.find((video) => category === video.category);
        return {...total, [category]: foundedVideosOnCategory};
      }, {}),
    );
  }, [categories, videos]);

  const saveCommentary = async () => {
    await fetch(`${END_POINT}/${selectedVideo.id}/comments`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: newCommentary,
    });
  };

  return (
    <div className="LayerOverlap">
      {/* ... Irrelevant content for now */}
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
        <iframe width="560" height="315" src={selectedVideo.url} title={selectedVideo.title}/>
        <ul>
          {selectedVideo.comments.map((commentary) => (
            <li>{commentary}</li>
          ))}
        </ul>
        <textarea onChange={(event) => {setNewCommentary(event.target.value); }}>{newCommentary}</textarea>
        <button onClick={saveCommentary} />
      </form>
    </div>
  );

};

LayerOverlap.displayName = 'LayerOverlap';
