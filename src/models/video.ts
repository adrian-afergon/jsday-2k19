export type VideoId = string;

export interface Video {
  id: VideoId;
  title: string;
  category: string;
  url: string;
  comments: string[];
}
