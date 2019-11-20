import { VideosRepository } from './repositories/VideosRepository';
import { CategoriesRepository } from './repositories/CategoriesRepository';

export interface AppDependencies {
  videosRepository: VideosRepository;
  categoriesRepository: CategoriesRepository;
}

export const initializeDependencies = (): AppDependencies => ({
  videosRepository: new VideosRepository(),
  categoriesRepository: new CategoriesRepository(),
} as AppDependencies);
