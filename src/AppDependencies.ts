import { VideosRepository } from './repositories/VideosRepository';
import { CategoriesRepository } from './repositories/CategoriesRepository';

export interface AppDependencies {
  videosRepository: VideosRepository;
  categoriesRepository: CategoriesRepository;
}

export const initializeDependencies = (): AppDependencies => ({
  videosRepository: {
    getVideos: () => Promise.resolve([]),
    saveComments: (comment: string) => Promise.resolve(),
  },
  categoriesRepository: {
    getCategories: () => Promise.resolve([]),
  },
} as AppDependencies);
