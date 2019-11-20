import { Video } from '../models/video';

export class VideosRepository {
  public getVideos: () => Promise<Video[]> = () => Promise.resolve([
    {
      id: '1',
      category: 'terror',
      title: 'La amiga imaginaria y otros relatos de terror',
      url: 'https://www.youtube.com/embed/xBDQoZS-EeA',
      comments: ['It\'s an amazing video'],
    },
    {
      id: '2',
      category: 'action',
      title: 'My Hero Academia: Live Action 1',
      url: 'https://www.youtube.com/embed/Rn4rkWNdXCE',
      comments: ['It\'s an amazing video'],
    },
    {
      id: '3',
      category: 'action',
      title: 'Yuri Boyka Undisputed',
      url: 'https://www.youtube.com/embed/pe2PEzEPPh4',
      comments: ['I don\'t like it, to aggressive'],
    },
  ])

  public saveComments: (comment: string) => Promise<void> = () => Promise.resolve();
}
