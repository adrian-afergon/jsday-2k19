import { Video } from '../models/video';

export const buildVideoWidth = ({
  id = 'irrelevant',
  title = 'irrelevant',
  category = 'irrelevant',
  url = 'irrelevant',
  comments = [] as string[],
}): Video => ({
  id,
  title,
  category,
  url,
  comments,
});
