import { Video } from '../models/video';

export interface VideosRepository {
  getVideos: () => Promise<Video[]>;
  saveComments: (comment: string) => Promise<void>;
}
