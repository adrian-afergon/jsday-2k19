import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Videos } from './';
import { VideosRepository } from '../../repositories/VideosRepository';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { AppDependencies, initializeDependencies } from '../../AppDependencies';

describe('Videos', () => {

  let dependencies: AppDependencies;
  beforeEach(() => {
    dependencies = initializeDependencies();
    dependencies.videosRepository.getVideos = jest.fn(() => Promise.resolve([]));
    dependencies.categoriesRepository.getCategories = jest.fn(() => Promise.resolve([]));
  });

  it('should get the starting values when component is loaded', () => {
    const {videosRepository, categoriesRepository} = dependencies;
    const renderResult: RenderResult = render(
      <Videos dependencies={dependencies}/>,
    );
    expect(videosRepository.getVideos).toHaveBeenCalledTimes(1);
    expect(categoriesRepository.getCategories).toHaveBeenCalledTimes(1);
  });
});
