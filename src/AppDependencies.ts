import { VideosRepository } from './repositories/VideosRepository';
import { CategoriesRepository } from './repositories/CategoriesRepository';

export interface AppDependencies {
  videosRepository: VideosRepository;
  categoriesRepository: CategoriesRepository;
}
